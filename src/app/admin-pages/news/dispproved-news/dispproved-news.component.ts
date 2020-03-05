import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../newslist/user.interface';

@Component({
  selector: 'app-dispproved-news',
  templateUrl: './dispproved-news.component.html',
  styleUrls: ['./dispproved-news.component.css']
})
export class DispprovedNewsComponent implements OnInit {
  news: News[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getdispproved().subscribe(
      (news: News[]) => this.news = news,
      (error: Response) => console.log(error)
    );
  }

}
