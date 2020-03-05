import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private rootURl = 'http://localhost:8000/';
  constructor(private httpRequest: Http) { }

  public sendPostRequest(routeName, body, header){
    return this.httpRequest.post(this.rootURl + routeName, body, header);
    console.log(body);
  } 
  public  sendGetRequest(routeName){
    return this.httpRequest.get(this.rootURl + routeName);
  }
  public  sendPutRequest(routeName, body, header ) {
    return this.httpRequest.put(this.rootURl + routeName, body, header);
  }
 
  public sendDeleteRequest(routeName) {
    return this.httpRequest.delete(this.rootURl + routeName);
  }  
}
