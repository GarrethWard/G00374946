import { Component, OnInit } from '@angular/core';
import { NewsUKService } from '../Services/news-uk.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  NewsStories: any = [];
  constructor(private newsService: NewsUKService) { }
  ngOnInit() {
    this.newsService.GetLatestNewsStories().subscribe((data) => {
      this.NewsStories = data.articles;
    });
  }
}
