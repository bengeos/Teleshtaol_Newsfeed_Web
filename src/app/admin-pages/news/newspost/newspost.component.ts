import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormBuilder} from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NewsService } from '../../../services/news.service';
import { HttpService } from '../../../services/http.service';
import { NewsObject } from '../news.objects';


export interface newspost{

}

@Component({
  selector: 'app-newspost',
  templateUrl: './newspost.component.html',
  styleUrls: ['./newspost.component.css']
})

export class NewspostComponent implements OnInit {
  public file_upload_event: File=null;
  public new_news = new NewsObject();
  constructor(private newService:NewsService,
    private http: HttpService) { }

  ngOnInit() {
  }
  public fileUploadEvent(event) {
    this.file_upload_event = event.srcElement.files;
  }
  public onSubmit() {
    const formData: FormData = new FormData();
    this.new_news.image_file = this.file_upload_event[0];
    this.new_news.image_file_name = this.file_upload_event[0].name;
    this.newService.newspost(this.new_news).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succesfully Posted',
          showConfirmButton: false,
          timer: 1500
        });
        
      },
      error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops',
          text:'Unable to Post',
          showConfirmButton: false,
          timer: 1500
        })
      } 
    );
    
    
  }
}
