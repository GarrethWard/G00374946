import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UKWeatherService {

  constructor(private httpClient: HttpClient) { } 
    
    GetLatestWeather():Observable<any>{
       return this.httpClient.get('https://openweathermap.org/data/2.5/weather?lat=51.51&lon=-013&appid=439d4b804bc8187953eb36d2a8c26a02');
   }//Reads in weather data from a url, using longitude and latitude
  }