import { AboutComponent } from './../components/about/about.component';
import { BlogComponent } from './../components/blog/blog.component';
import { HomeComponent } from './../components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  // declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
