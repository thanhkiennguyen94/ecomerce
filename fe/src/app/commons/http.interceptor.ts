import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { TokenStorageService } from "../main/auth/token-storage.service";
import { EventBusService } from "../_shared/event-bus.service";
import { EventData } from "../_shared/event.class";
import { AuthJwtService } from "../../app/main/auth/auth-jwt.service";
import { JwtResponse } from "../../app/main/auth/jwt-response";

const TOKEN_HEADER_KEY = "Authorization";
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private storageService: TokenStorageService,
    private eventBusService: EventBusService,
    private authService: AuthJwtService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes("auth/authenticate") &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap((data: JwtResponse) => {
            this.isRefreshing = false;
            this.storageService.saveToken(data.accessToken, data.refreshToken);
            this.addTokenHeader(request, data.accessToken);
            return next.handle(this.addTokenHeader(request, data.accessToken));
          }),
          catchError((error) => {
            this.isRefreshing = false;

            if (error.status == "403" || error.status == "401") {
              this.eventBusService.emit(new EventData("logout", null));
            }

            return throwError(() => error);
          })
        );
      }
    }
    return next.handle(request);
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, "Bearer " + token),
    });
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
