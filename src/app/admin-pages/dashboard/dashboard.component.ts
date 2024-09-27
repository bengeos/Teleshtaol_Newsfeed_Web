import { Component, OnInit } from '@angular/core';
import { ChartObject, DashboardListData } from '../../views/dashboard/dashboard.object';
import { DashboardService } from '../../services/dashboard.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public bar_chart_chart_object: ChartObject = new ChartObject();
    public bar_chart: any = null;
    public bar_chart_option: any = null;
    public dataRefresher: any;
    public dashboard_data = new DashboardListData();
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.dashboardService.DashboardUsersDailyDataEmitter.subscribe(
      data => {
        this.dashboard_data = data; 
        this.updateChartData(); 
        console.log('daly_users', data); }
  );
  }
  public updateChartData() {
    console.log('update CHART', this.dashboard_data);
    this.bar_chart_chart_object.series = [this.dashboard_data.users_count];
    this.bar_chart_chart_object.labels = this.dashboard_data.member_date;
    this.bar_chart_option.high = Math.max.apply(Math, this.dashboard_data.users_count);
    this.bar_chart = new Chartist.Bar('#bar_chart', this.bar_chart_chart_object, this.bar_chart_option);
}

}
