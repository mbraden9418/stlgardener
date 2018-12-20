import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
