import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import "rxjs/Rx";
import {Observable} from "rxjs"; 
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:Http,private httpService:HttpService) { }

  getUsers() :Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/users').map(
        (response: Response)=>{
            return response.json().users;
        }  
    );
    console.log('clicked');
}
getnews() :Observable<any>{
  return this.httpService.sendGetRequest('api/all').map(
      (response: Response)=>{
          return response.json().news;
      }  
  );
  console.log('clicked');
}

getRoles() : Observable<any>{
  return this.httpService.sendGetRequest('api/roles').map(
    (response: Response)=>{
      return response.json().roles;
  } 
  );
}
}
