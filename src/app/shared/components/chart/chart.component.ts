import {Component, Input, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";
import {ApiHttpService} from "../../../core/services/api-http.service";
import {ChartType} from "./chart.type";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartType: ChartType;
  @Input() apiUrl: string;

  chartOptions: EChartsOption;

  constructor(private chartApi: ApiHttpService) {
  }

  ngOnInit(): void {

    this.chartApi.get(this.apiUrl).subscribe(response => {

      let dataXAxis = [];
      let dataYAxis = [];

      Object.entries(response.data).forEach(([key, value]) => {
        dataXAxis.push(key);
        dataYAxis.push(value);
      });

      this.chartOptions = {
        title: {
          text: response.title,
        },
        grid: {
          top: '18%',
          left: '3%',
          bottom: '3%',
          containLabel: true
        },
        dataZoom: [
          {
            type: 'inside',
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: dataXAxis,
          axisTick: {
            alignWithLabel: true
          },
          name: response.categoryLabel,
          nameTextStyle: {
            fontWeight: "bold",
            fontSize: 15
          }
        },
        yAxis: {
          type: 'value',
          name: response.valueLabel,
          nameLocation: "end",
          nameTextStyle: {
            fontWeight: "bold",
            fontSize: 15,
            align: "center",
            padding: 10
          }
        }
      };

      if (this.chartType === ChartType.LINE) {
        this.chartOptions.series = [{
          data: dataYAxis,
          type: ChartType.LINE
        }];
      } else {
        this.chartOptions.series = [{
          data: dataYAxis,
          type: ChartType.BAR
        }];
      }

    });

  }


}
