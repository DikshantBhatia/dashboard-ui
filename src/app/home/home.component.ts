import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import {ChartService} from "./chart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartOptions: EChartsOption;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {

   this.chartService.getCreditAmountByDate().subscribe(data => {
      console.log(data);

      let dataXAxis = [];
      let dataYAxis = [];

      Object.entries(data).forEach(([key, value]) => {
          dataXAxis.push(key);
          dataYAxis.push(value);
      });


     this.chartOptions =  {
       xAxis: {
         type: 'category',
         data: dataXAxis,
       },
       yAxis: {
         type: 'value',
       },
       series: [
         {
           data: dataYAxis,
           type: 'line',
         },
       ],
     };

   });

  }

}
