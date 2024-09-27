import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import "rxjs/Rx";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }
  

  getUsers() :Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/users').map(
        (response: Response)=>{
            return response.json().users;
        }  
    );
    console.log('clicked');
}
getUser(id:number) :Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/user/'+id).map(
      (response: Response)=>{
          return response.json().user;
      }  
  );
  console.log('clicked');
}

}
