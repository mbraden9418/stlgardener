import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  todaysDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
