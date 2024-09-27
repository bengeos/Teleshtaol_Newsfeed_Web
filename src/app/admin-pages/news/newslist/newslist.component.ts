import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../user.interface';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Role, News } from './user.interface';

import { NewsListDialogComponent } from '../news-list-dialog/news-list-dialog.component';
import { NewsObject } from '../news.objects';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  modalRef: BsModalRef;
  users: User[];
  roles: Role[];
  news: News[];
  public news_data = new NewsObject();
  public captures: Array<any>;
  public loading = false;
  constructor(private userService: UserService,
    private newsService: NewsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.newsService.getnews().subscribe(
      (news: News[]) => this.news = news,
      (error: Response) => console.log(error)
    );
  }

  public Edit(selected_news: News): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = selected_news;
    const dialogRef = this.dialog.open(NewsListDialogComponent, dialogConfig);
  }
  public removeNews(news_data: NewsObject) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.newsService.deleteNews(news_data).subscribe(
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
}
