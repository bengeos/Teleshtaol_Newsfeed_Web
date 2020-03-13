import { Injectable } from '@angular/core';
import {Http,Response,Headers} from "@angular/http"; 
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import "rxjs/Rx";
import {Observable} from "rxjs";
import { NewsObject } from '../admin-pages/news/news.objects';

@Injectable({
  providedIn: 'root'
})
export class NewsService {  

  constructor(private http: HttpService) { }
  
  /* public newspost(title:string,content:string,video_url:string,image_url:string) {
    return this.http.post('http://127.0.0.1:8000/api/news_post',{title: title, content:content, video_url:video_url,image_url:image_url},
    { headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
  } */
  /* newspost(title:string,content:string,video_url:string,image_url:string){
    const body=JSON.stringify({title:title,content:content,video_url:video_url,image_url:image_url});
    const headers=new Headers({'Content-Type':'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/news_post',body,{headers:headers})
} */
getnews() :Observable<any>{
  return this.http.sendGetRequest('api/all').map(
      (response: Response)=>{
          return response.json().news;
      }  
  );
  
}
getapproved(){
  return this.http.sendGetRequest('api/showapproved').map(
    (response: Response)=>{
        return response.json().news;
    }  
);
}
getdispproved(){
  return this.http.sendGetRequest('api/showdispproved').map(
    (response: Response)=>{
        return response.json().news;
    }  
);
}
public newspost(news_data:NewsObject){
  const new_header = new Headers();
  const formData: FormData = new FormData();
  formData.append('image_file', news_data.image_file, news_data.image_file_name);
      formData.append('title', news_data.title);
      formData.append('content', news_data.content);
      formData.append('video_url', news_data.video_url);
      console.log(formData);
      return this.http.sendPostRequest('api/news_post?token='+localStorage.getItem('token'),formData,new_header); 
  }
  public newsedit(newsedit_data:NewsObject){
    const new_header = new Headers();
    const formData: FormData = new FormData();
   formData.append('image_file', newsedit_data.image_file, newsedit_data.image_file_name);
   formData.append('id', newsedit_data.id + '');
        formData.append('title', newsedit_data.title);
        formData.append('content', newsedit_data.content);
        formData.append('video_url', newsedit_data.video_url);
        formData.append('approval',newsedit_data + '');
        if(newsedit_data.approval){
          formData.append('approval', '1');
      }
      else{
          formData.append('approval', '0');
      }

       
        return this.http.sendPostRequest('api/newspostupdate?token='+localStorage.getItem('token'),formData,new_header); 
    }
    public deleteNews(newsdelete_data:NewsObject){
      const new_header = new Headers();
      const formData: FormData = new FormData();
      return this.http.sendDeleteRequest('api/news_post/'+newsdelete_data.id); 
 
    }
    
}
