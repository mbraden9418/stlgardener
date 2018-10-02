import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogArticlesComponent} from './blog-articles/blog-articles.component';

const blogRoutes: Routes = [
  { path: '', component: BlogArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }


