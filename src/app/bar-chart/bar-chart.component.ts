import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MasterService } from '../service/master.service';
import { months } from '../utils/Util';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

  constructor(private service: MasterService) { }

  public chart: any;
  public labeldata: any[] = [];
  public realdata: any[] = [];
  public colordata: any[] = [];
  public targetdata: any[] = [];

  ngOnInit(): void {
    this.service.Getchartinfo().subscribe(result => {
      this.chart = result;
      if (this.chart != null) {
        for (let i = 0; i < this.chart.length; i++) {
          this.labeldata.push(this.chart[i].year)
          this.realdata.push(this.chart[i].amount)
          this.colordata.push(this.chart[i].colorcode)
          this.targetdata.push(this.chart[i].target)
        }
      }
      this.createChart(this.labeldata, this.realdata, this.colordata, this.targetdata, 'bar', 'barChart');
      this.createChart(this.labeldata, this.realdata, this.colordata, this.targetdata, 'pie', 'pieChart');
    })

  }
  createChart(labeldata: any, realdata: any, colorcode: any, target: any, type: any, id: any) {

    // const labels = Utils.months({count: 7});
    const labels = months({ count: 6 });

    if (type == "pie") {
      this.chart = new Chart(id, {
        type: type,

        data: {
          labels: labels,
          datasets: [{
            label: "Data Set1",
            data: realdata,
            backgroundColor: colorcode,
            barThickness: 10
          },
            // {
            //   label: 'Dataset 2',
            //   data: target,
            //   borderColor: "blue",
            //   backgroundColor: "lightblue",
            //   type: 'line',
            //   order: 0
            // }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
      })
    } else {
      this.chart = new Chart(id, {
        type: type,

        data: {
          labels: labels,
          datasets: [
            {
              label: 'Dataset 2',
              data: target,
              borderColor: "blue",
              backgroundColor: "lightblue",
              type: 'line',
              order: 0
            },
            {
              label: "Data Set1",
              data: realdata,
              backgroundColor: colorcode,
              barThickness: 10
            }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
      })
    }


  }
}
