import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../user.interface';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../../news/newslist/user.interface';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RoleService } from '../../../services/role.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsObject } from '../../news/news.objects';
import { UserObject } from '../role-and-permission/user.objects';
@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  users: User[];
  user: User;
  roles: Role[];
  public selected_user_data = new UserObject();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RoleService,
    public dialogRef: MatDialogRef<RoleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) selected_user: UserObject) {
    this.selected_user_data = selected_user;
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(this.selected_user_data.id);
    console.log(this.selected_user_data.email);
    console.log(form.value.role);
    const id = +this.route.snapshot.paramMap.get('id');

    this.roleService.roleAssign(this.selected_user_data, form.value.role).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Assigned',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error => {
        console.log('Error');
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops',
          text: 'Not Assigned',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
