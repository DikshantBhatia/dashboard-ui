import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConstants} from "./app-constants.service";

// generic http service which is designed to be used for all http calls
@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient, private constants : AppConstants) { }

   public get(url: string, options?: any):Observable<any> {
    return this.http.get(this.constants.API_ENDPOINT + url);
  }
}
