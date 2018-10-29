import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://api.darksky.net';

export interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: Currently;
  minutely: Minutely;
  hourly: Hourly;
  daily: Daily;
  flags: Flags;
  offset: number;
}

export interface Flags {
  sources: string[];
  'nearest-station': number;
  units: string;
}

export interface Daily {
  summary: string;
  icon: string;
  data: Datum3[];
}

export interface Datum3 {
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipProbability: number;
  precipType?: string;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windGustTime: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  uvIndexTime: number;
  visibility: number;
  ozone: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
}

export interface Hourly {
  summary: string;
  icon: string;
  data: Datum2[];
}

export interface Datum2 {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
  precipType?: string;
}

export interface Minutely {
  summary: string;
  icon: string;
  data: Datum[];
}

export interface Datum {
  time: number;
  precipIntensity: number;
  precipProbability: number;
}

export interface Currently {
  time: number;
  summary: string;
  icon: string;
  nearestStormDistance: number;
  nearestStormBearing: number;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  loadWeather(): Observable<Weather> {
    return this.http
    .get<Weather>(API_URL  + '/forecast/f304bfe4a78889904fb6bf0126c664a9/38.6270,-90.1994');
  }
}

