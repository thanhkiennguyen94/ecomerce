import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtResponse } from "./jwt-response";
import { AuthLogin } from "./auth-login";
import { environment } from "../../../environments/environment";
import { TokenStorageService } from "./token-storage.service";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const baseURL = `${environment.host_name}:${environment.port}/api/auth`;
const authURL = baseURL + "/authenticate";
const logoutURL = baseURL + "/logout";
const refreshTokenURL = baseURL + "/refresh-token";
@Injectable({
  providedIn: "root",
})
export class AuthJwtService {
  constructor(
    private httpClient: HttpClient,
    private tokenStorageServce: TokenStorageService
  ) {}

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */

  httpOptionsWithToken = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ` + this.tokenStorageServce.getToken(),
    }),
  };

  httpOptionsWithRefreshToken = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ` + this.tokenStorageServce.getRefreshToken(),
    }),
  };

  public authenticate(userInfo: AuthLogin): Promise<JwtResponse> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<JwtResponse>(authURL, userInfo, httpOptions)
        .subscribe((response: JwtResponse) => {
          resolve(response);
        }, reject);
    });
  }

  public logout() {
    this.tokenStorageServce.logOut();
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(logoutURL, this.httpOptionsWithToken)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  public refreshToken() {
    return this.httpClient.post(
      refreshTokenURL,
      {},
      this.httpOptionsWithRefreshToken
    );
  }
}
