import { Injectable } from "@angular/core";

const TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USERNAME_KEY = "AuthUsername";
const AUTHORITIES_KEY = "AuthAuthorities";
@Injectable({
  providedIn: "root",
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() {}

  public logOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(accessToken: string, refreshToken: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, accessToken);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(
        (authority) => {
          this.roles.push(authority.authority);
        }
      );
    }
    return this.roles;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(TOKEN_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
