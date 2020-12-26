import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private tokenKey = 'cr-app-token';

  constructor() {
  }

  public getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  public removeToken() {
    return localStorage.removeItem(this.tokenKey);
  }

  public saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

}
