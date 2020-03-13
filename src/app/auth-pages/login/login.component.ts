import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public error=null;
  public form = {
    email: null,
    password: null
  };

  constructor(private Authentication:AuthenticationService,
    private Token: TokenService,
    private auth: AuthService,
    private router:Router) { }
    
  ngOnInit() {
    
    
  }

  onSubmit() {
    this.Authentication.login(this.form).subscribe(
     data=>this.handleResponse(data),
     error=>this.handleError(error)
   );
   
  } 

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.setUserRoleID(data.user_role_id[0].id);
    //console.log(data.user_role_id[0].id);
    //console.log(data.user_role_id[0].name);
    this.router.navigateByUrl('admin');
  }
  handleError(error){
    this.error=error.error.error;
  }
  public setUserRoleID(user_role_id: string) {
    localStorage.setItem('user_role_id', user_role_id);
  }
}
