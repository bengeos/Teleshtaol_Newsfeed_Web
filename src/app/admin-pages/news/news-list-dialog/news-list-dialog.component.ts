import { Component, OnInit,Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { User } from '../../../user.interface';
import { NgForm } from '@angular/forms';
import { NewsObject } from '../news.objects';
import { NewsService } from '../../../services/news.service';
import Swal from 'sweetalert2';
/* export interface DialogData {
  animal: string;
  name: string;
} */
/* export interface ContactsModalInterface {
  full_name: string;
  phone_num: string;
  gender: string;
  email: string;
  fellow_dep: string;
  graduate_date: string;
}
 */
@Component({
  selector: 'app-news-list-dialog',
  templateUrl: './news-list-dialog.component.html',
  styleUrls: ['./news-list-dialog.component.css']
})
export class NewsListDialogComponent implements OnInit {
  public selected_news_data = new NewsObject();
  public file_upload_event: any;
  public captures: Array<any>;
  public news_data = new NewsObject();
  @Output() onError = new EventEmitter<any>();
 
  users:User[];

  constructor(public userService:UserService,
    public newService:NewsService,
    public dialogRef: MatDialogRef<NewsListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) selected_news: NewsObject) {
      this.selected_news_data=selected_news;
      
     }

  ngOnInit(): void {
    /* this.userService.getUsers().subscribe(
      data => {this.news_data = data;}
    );
    console.log(this.selected_news_data);
     */
  }
  
  
  
  public onSubmit() {
    const formData: FormData = new FormData();
    this.selected_news_data.image_file = this.file_upload_event[0];
    this.selected_news_data.image_file_name = this.file_upload_event[0].name;
    
     this.newService.newsedit(this.selected_news_data).subscribe(
       data=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Updated',
          showConfirmButton: false,
          timer: 1500
        })
       },
       error=>{
        console.log('Error');
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops',
          text:'Not Updated',
          showConfirmButton: false,
          timer: 1500
        })
       }
     );
    
  }
  public fileUploadEvent(event) {
    this.file_upload_event = event.srcElement.files;
    console.log(this.file_upload_event);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
