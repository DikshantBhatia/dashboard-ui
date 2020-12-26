import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstants {

  public readonly API_ENDPOINT: string = 'http://localhost:8080/api';

  public readonly GET_LOAN_AMOUNT_BY_YEAR_ENDPOINT: string = '/reports/loanByYear';

}
