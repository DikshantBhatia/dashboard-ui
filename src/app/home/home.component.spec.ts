import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {HomeComponent} from './home.component';
import {ChartType} from "../shared/components/chart/chart.type";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AppConstants} from "../core/services/app-constants.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    /*const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;*/
    expect(component).toBeTruthy();
  });

  it('should have line chart as current chart type', () => {
    /*const fixture = TestBed.createComponent(HomeComponent);
    const homeComponent = fixture.componentInstance;*/
    expect(component.currentVisibleChartType).toEqual(ChartType.LINE);
    expect(component.chartType).toEqual(ChartType);
  });

  it('should user api url from app constants', () => {
    let constants = fixture.debugElement.injector.get(AppConstants);
    expect(component.loanAmountByYearApiUrl).toEqual(constants.GET_LOAN_AMOUNT_BY_YEAR_ENDPOINT);
  });

});
