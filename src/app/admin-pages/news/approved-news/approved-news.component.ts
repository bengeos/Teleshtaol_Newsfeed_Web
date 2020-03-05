import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../newslist/user.interface';


@Component({
  selector: 'app-approved-news',
  templateUrl: './approved-news.component.html',
  styleUrls: ['./approved-news.component.css']
})
export class ApprovedNewsComponent implements OnInit {
  news: News[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getapproved().subscribe(
      (news: News[]) => this.news = news,
      (error: Response) => console.log(error)
    );
  }


}
