import { Component, OnInit,TemplateRef } from '@angular/core';
import { User } from '../../../user.interface';

import {NgForm} from "@angular/forms";  
import { UserService } from '../../../services/user.service';
//import { UserService } from '../../../services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserObject} from './user.objects';
import { from } from 'rxjs';
import { MatDialog,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RoleDetailComponent } from '../role-detail/role-detail.component';
import Swal from 'sweetalert2';
import { RoleService } from '../../../services/role.service';



@Component({
  selector: 'app-role-and-permission',
  templateUrl: './role-and-permission.component.html',
  styleUrls: ['./role-and-permission.component.css']
})

export class RoleAndPermissionComponent implements OnInit {
  public user_data=new UserObject();
  modalRef: BsModalRef;
  users:User[];
  constructor(private userService:UserService,private modalService: BsModalService,
    public dialog: MatDialog,public roleService:RoleService) { }

  ngOnInit() {
    this.onGetUsers();
  }
  onGetUsers(){
    this.userService.getUsers().subscribe(
      (users:User[])=>this.users=users,
      (error:Response)=>console.log(error),
    );
    console.log(this.users);
  }
  public Edit(selected_user:User): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = selected_user;
    const dialogRef = this.dialog.open(RoleDetailComponent, dialogConfig);
  }


  Delete(user_data: UserObject){
    console.log(this.user_data.id);
    Swal.fire({
      title: 'Are you sure to Delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.roleService.deleteuser(user_data).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })

          }
        );
      }
    })
  }
  selectedUser: User;
  onSelect(user: User): void {
  this.selectedUser = user;
}

}
