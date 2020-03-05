import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

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
      data=>{
        console.log(data),
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thank you for Registering',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        this.handleError(error),
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops',
          text:'Something Wrong',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
      
    
    
   }
   
   handleError(error){
    this.error=error.error;

  }
}
