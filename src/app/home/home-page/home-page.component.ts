import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherDataService, Weather} from '../.././weather-data.service';

@Component({
  selector: 'sg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  todaysDate = new Date();
  Month =  this.monthNames[this.todaysDate.getMonth()];

/*
  weather: Observable<Weather[]>;

  constructor(svc: WeatherDataService) {
    this.weather = svc.loadWeather();
  }
*/
  ngOnInit() {
  }

}
