import {EventEmitter, Injectable} from '@angular/core';
import { HttpService } from './http.service';
// import "rxjs/Rx";
// import {Observable} from "rxjs";
import { Http } from '@angular/http';
import { MainDashboard } from '../views/dashboard/dashboard.object';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public MainDashboardDataEmitter = new EventEmitter<MainDashboard[]>(); 
  
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
    return this.httpservice.sendGetRequest('api/posts_dashboard')
  }
  private processGetMainDashboardData(dash_data) {
    
    if(dash_data && dash_data.status && dash_data.main_dashboard){
      console.log(dash_data);
        this.MainDashboardDataEmitter.emit(dash_data.main_dashboard);
    }
  }
}
