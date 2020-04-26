import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsUKService {

  constructor(private httpClient: HttpClient) { }


  GetLatestNewsStories():Observable<any>{
     return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=gb&apiKey=7a5bb22a340248cbb37586e88df653cd');
  }//Reads in news data for UK
}