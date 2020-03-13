import {EventEmitter, Injectable} from '@angular/core';
import { HttpService } from './http.service';
// import "rxjs/Rx";
// import {Observable} from "rxjs";
import { Http } from '@angular/http';
import { MainDashboard,PostDashboard,DashboardListData } from '../views/dashboard/dashboard.object';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public MainDashboardDataEmitter = new EventEmitter<MainDashboard[]>();
  public PostDashboardDataEmitter = new EventEmitter<PostDashboard[]>(); 
  public DashboardUsersDailyDataEmitter = new EventEmitter<DashboardListData>(); 
  
  constructor(private httpservice: HttpService,private http:Http) { }

  getmainDashboard(){
    return this.httpservice.sendGetRequest('api/main_dashboard').subscribe(
      data => {
        //console.log(this.httpservice.sendGetRequest('api/main_dashboard'));
        
        this.processGetMainDashboardData(data.json()); console.log(data);
          
      },
      error => {
          console.log(error);
      },
  );
  
  }
  getPostDashbord(){
    return this.httpservice.sendGetRequest('api/posts_dashboard').subscribe(
      data=>{
        this.processPostDashboardData(data.json());
         console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
  public getDailyUsersDashboardData(num: number) {
    return this.httpservice.sendGetRequest('daily_member_usage_chart')
        .subscribe(
            data => {
                this.processGetMobileUserChartData(data);
                console.log(data);
            },
            error => {
                console.log('ERROR', error)
            }
        );
}
  private processGetMainDashboardData(dash_data) {
    
    if(dash_data && dash_data.status && dash_data.main_dashboard){
      console.log(dash_data);
        this.MainDashboardDataEmitter.emit(dash_data.main_dashboard);
    }
  }
  private processPostDashboardData(dash_data) {
    
    if(dash_data && dash_data.status && dash_data.feeds_dashboard){
      console.log(dash_data);
        this.PostDashboardDataEmitter.emit(dash_data.feeds_dashboard);
    }
  }
  public processGetMobileUserChartData(mobile_user_data: any) {
    if (mobile_user_data && mobile_user_data.status && mobile_user_data.users_member_data) {
        this.DashboardUsersDailyDataEmitter.emit(mobile_user_data.users_member_data);
    }
}
  

}
