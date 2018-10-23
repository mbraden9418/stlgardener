import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.darksky.net/forecast/f304bfe4a78889904fb6bf0126c664a9//38.627003,-90.199402';

export interface Weather {
    latitude: string;
    longitude: string;
    timezone: string;
    currently: Currently[];
}

export interface Currently {
  time: string;
  summary: string;
  icon: string;
  nearestStormDistance: string;
  precipIntensity: string;
  precipIntensityError: string;
  precipProbability: string;
  precipType: string;
  temperature: string;
  apparentTemperature: string;
  dewPoint: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
  windGust: string;
  windBearing: string;
  cloudCover: string;
  uvIndex: string;
  visibility: string;
  ozone: string;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }
  loadWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(API_URL);
  }
}

