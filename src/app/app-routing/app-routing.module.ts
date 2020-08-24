import { UserDetailsComponent } from './../components/user-details/user-details.component';
import { UsersComponent } from './../components/users/users.component';
import { AboutComponent } from './../components/about/about.component';
import { BlogComponent } from './../components/blog/blog.component';
import { HomeComponent } from './../components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
// import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent, pathMatch: 'prefix', children: [
      { path: ':userId', component: UserDetailsComponent },
      { path: '', component: PlaceholderComponent }
  ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  // declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
