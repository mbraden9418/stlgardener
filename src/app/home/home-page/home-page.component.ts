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

  tempMessage = 'string';

  weather: Observable<Weather>;

  constructor(svc: WeatherDataService) {
    this.weather = svc.loadWeather();
  }

  ngOnInit() {
  }

  temperatureAdvice(temperature: number) {
    if (temperature < 50) {
      this.tempMessage = 'Wear a jacket, stay warm!';
    } else if (temperature < 80) {
      this.tempMessage = 'Enjoy the comfortable gardening temperature';
    } else if (temperature >= 80) {
      this.tempMessage = 'It is hot out there! Make sure you stay hydrated, and your garden too!';
    }
  }


}
