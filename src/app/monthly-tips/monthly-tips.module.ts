import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthlyTipsRoutingModule } from './monthly-tips-routing.module';
import { MonthlyTipsComponent } from './monthly-tips/monthly-tips.component';

@NgModule({
  imports: [
    CommonModule,
    MonthlyTipsRoutingModule
  ],
  declarations: [MonthlyTipsComponent]
})
export class MonthlyTipsModule { }
