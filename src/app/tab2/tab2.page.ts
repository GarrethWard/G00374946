import { Component, OnInit } from '@angular/core';
import{IrishNewsService} from '../Services/irish-news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  NewsStories:any =[]; //array for reading in data
    constructor(private newsService:IrishNewsService) {}
    ngOnInit(){
      this.newsService.GetLatestNewsStories().subscribe(
        (data)=>{
          this.NewsStories = data.articles;//reads in data from class "Articles" on api
        }
      );
    }
  }
