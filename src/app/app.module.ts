import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { BarChartComponent } from './bar-chart/bar-chart.component';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
