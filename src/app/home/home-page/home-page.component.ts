import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherDataService, Weather} from '../.././weather-data.service';
import {gardenQuotes} from '../garden-quotes';
import {monthlyTips} from '../monthly-tips';


@Component({
  selector: 'sg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {

  monthNames = ['january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'];

  todaysDate = new Date();

  month =  this.monthNames[this.todaysDate.getMonth()];
  week = Math.floor(this.todaysDate.getDate() / 8 ) + 1;


  gardenQuote = gardenQuotes[Math.floor(Math.random() * gardenQuotes.length)];
  weeklyTip = monthlyTips[this.month][this.week];

  weather: Observable<Weather>;

  constructor(svc: WeatherDataService) {
    this.weather = svc.loadWeather();
  }

  ngOnInit() {
  }


  temperatureAdvice(temperature: number) {
    if (temperature < 50) {
      return 'Keep your greenhouse warm or bring plants inside!';
    } else if (temperature < 80) {
      return 'Enjoy the comfortable gardening temperature';
    } else {
      return 'It is hot out there- make sure you water your garden well!';
    }
  }

  uvAdvice(uvIndex: number) {
    if (uvIndex < 3) {
      return 'Not so sunny';
    } else if (uvIndex < 6) {
      return 'Wear SPF 30 and a hat';
    } else {
      return `
        Wear protection; stay out of the sun from 10 a.m. to 4 p.m.!
        Consider shade cloths for sensitive or newly transplanted plants
      `;
    }
  }

  getMoonPhase(moonPhase: number) {
    if (moonPhase < 0.1) {
      return 'new moon';
    } else if (moonPhase < 0.24) {
      return 'waxing crescent';
    } else if (moonPhase < 0.26) {
    return 'first quarter';
    } else if (moonPhase < 0.48) {
    return 'waxing gibbous';
    } else if (moonPhase < 0.52) {
      return 'full moon';
    } else if (moonPhase < 0.73) {
      return 'waning gibbous';
    } else if (moonPhase < 0.77) {
      return 'last quarter';
    } else {
      return 'waning crescent';
    }
}


}

