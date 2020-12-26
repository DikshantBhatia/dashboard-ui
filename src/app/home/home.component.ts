import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {ChartType} from "../shared/components/chart/chart.type";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {AppConstants} from "../core/services/app-constants.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   chartType = ChartType;
   currentVisibleChartType = this.chartType.LINE;
   loanAmountByYearApiUrl = this.constants.GET_LOAN_AMOUNT_BY_YEAR_ENDPOINT;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,
              private router: Router, private constants: AppConstants) {}


  logout() {
    this.authService.logout();
    this.router.navigate(['/identify']);
  }


}
