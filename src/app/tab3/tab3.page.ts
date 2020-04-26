import { Component, OnInit } from '@angular/core';
import{IrishWeatherService} from '../Services/irish-weather.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  IrishWeather:any =[];
  constructor(private irishWeatherService:IrishWeatherService) {}
  ngOnInit(){
    this.irishWeatherService.GetLatestWeather().subscribe(
      (data)=>{
        this.IrishWeather = data.weather;
      }
    );
  }
}
 
