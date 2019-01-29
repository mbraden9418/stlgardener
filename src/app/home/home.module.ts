import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
