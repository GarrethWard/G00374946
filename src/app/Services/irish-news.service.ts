import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IrishNewsService {
 
  constructor(private httpClient: HttpClient) { } 
  
  GetLatestNewsStories():Observable<any>{
     return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=7a5bb22a340248cbb37586e88df653cd');
   }//reads in news data for ireland
 }