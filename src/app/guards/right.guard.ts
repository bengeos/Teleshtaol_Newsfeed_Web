import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RightGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router, ) { }
  
  canActivate(): boolean {
    if (this.auth.isAdminOrNewm()==true) {
      console.log('Authorized')
      return true
    } else {
      console.log('Unauthorized')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unauthorized Access',
        
      })
      this.router.navigate(['/admin'])
      return false
    }
  }
}
