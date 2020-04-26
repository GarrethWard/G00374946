import { Component, OnInit } from '@angular/core';
import{UKWeatherService} from '../Services/ukweather.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  UKWeather:any =[];
  constructor(private ukWeatherService:UKWeatherService) {}
  ngOnInit(){
    this.ukWeatherService.GetLatestWeather().subscribe(
      (data)=>{
        this.UKWeather = data.weather;
      }
    );
  }
}
 