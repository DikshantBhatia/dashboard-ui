import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"}
)
export class ChartService {

  constructor(private http: HttpClient) {}

   getCreditAmountByDate(): Observable<any>{
     return this.http.get('http://localhost:8080/api/credit', {
       headers : new HttpHeaders({ Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjA4NjQzNjk4LCJleHAiOjE2MDg2NDk2OTh9.RcsXv6kG9CnB392gI0wFugb4K7JUme6zH4UmhSaBeys'})
     });
   }

}
