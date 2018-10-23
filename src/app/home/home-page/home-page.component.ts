import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherDataService, Weather} from '../.././weather-data.service';

@Component({
  selector: 'sg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  todaysDate = new Date();
  Month = '';


  weathers: Observable<Weather[]>;

  /*constructor(svc: WeatherDataService) {
    this.weathers = svc.loadWeather();
  }
*/
  ngOnInit() {
  }

}



