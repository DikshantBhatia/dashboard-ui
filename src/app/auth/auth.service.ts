import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AppConstants} from "../core/services/app-constants.service";
import {TokenStorageService} from "../core/services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken;

  constructor(private http: HttpClient, private constants: AppConstants,
              private tokenService: TokenStorageService) { }

  signin(authData){
    return this.http.post(this.constants.API_ENDPOINT + '/auth/signin', authData).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      }));
  }

  signup(authData) : Observable<any> {
    return this.http.post(this.constants.API_ENDPOINT + '/auth/signup', authData).pipe(
      tap((response) => {
        this.handleAuthentication(response);
      }));
  }

  isLoggedIn() {
    return this.authToken ? true : false;
  }

  autoLogin() {
    const token = this.tokenService.getToken();
    // checking if token is empty,null,undefined or string with undefined value
    if(!token || token === 'undefined') {
       return of(false);
    }
    //validating if token is still valid and getting logged in user
    return this.http.get(this.constants.API_ENDPOINT + '/users/me');
  }

  logout() {
     this.authToken = null;
     this.tokenService.removeToken();
  }

  // gets the token from response and stores it in localstorage
  private handleAuthentication(response) {
    this.authToken = response.token;
    this.tokenService.saveToken(this.authToken);
  }

}
