import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http,private routeManager: Router) { }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  isAdmin() {

    const role_id: number = parseInt(this.getUserRoleID(), 10);
    if (role_id === 1){
      return true;
    }
    else
    {
      return false;
    };
  }
  isAdminOrNewm(){
    const role_id: number = parseInt(this.getUserRoleID(), 10);
    return (role_id <= 2);
  }
  public getUserRoleID() {
    return localStorage.getItem('user_role_id');    
  }
  getcurrrentuser(){
    return this.http.get('http://localhost:8000/getcurrentuser');
  }
  public logOut() {
    localStorage.clear();
    this.routeManager.navigate(['/auth/login']);
  }
}
