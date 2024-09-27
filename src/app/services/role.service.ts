import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { UserObject } from '../admin-pages/manage/role-and-permission/user.objects';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http,private httpService:HttpService) { }

  public roleAssign(user_data:UserObject,role: string) {
    const new_header = new Headers();
    const formData: FormData = new FormData();
    formData.append('email',user_data.email);
    formData.append('role',role);
    return this.httpService.sendPostRequest('api/attachrole/' + user_data.id,formData,
    {headers:new_header}
    ).map(
      response => response.json());
  }
  deleteuser(user_data:UserObject){
    return this.httpService.sendDeleteRequest('api/userdelete/'+user_data.id);

  }
  
}
