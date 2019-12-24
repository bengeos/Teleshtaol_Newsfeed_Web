import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public error=[];
  public form={
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }


  constructor(private Authentication:AuthenticationService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.Authentication.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
   }
   handleError(error){
    this.error=error.error.errors;

  }
}
