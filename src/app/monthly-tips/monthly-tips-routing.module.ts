import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthlyTipsComponent} from './monthly-tips/monthly-tips.component';

const monthlyTipsRoutes: Routes = [
  { path: '', component: MonthlyTipsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(monthlyTipsRoutes)],
  exports: [RouterModule]
})
export class MonthlyTipsRoutingModule { }
