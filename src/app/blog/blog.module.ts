import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogArticlesComponent]
})
export class BlogModule { }
