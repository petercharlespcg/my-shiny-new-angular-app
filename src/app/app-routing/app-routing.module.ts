import { UsersResolveGuard } from './../guards/UsersResolve/users-resolve.guard';
import { ConfirmationGuard } from './../guards/confirmation/confirmation.guard';
import { MessageListComponent } from './../components/message-list/message-list.component';
import { AuthGuard } from './../guards/auth/auth.guard';
import { UserDetailsComponent } from './../components/user-details/user-details.component';
import { UsersComponent } from './../components/users/users.component';
import { AboutComponent } from './../components/about/about.component';
import { BlogComponent } from './../components/blog/blog.component';
import { HomeComponent } from './../components/home/home.component';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
// import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'prefix',
    canActivateChild: [ AuthGuard ],
    resolve: {
      testusers: UsersResolveGuard
    },
    children: [
      { path: ':userId', component: UserDetailsComponent },
  ] },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  providers: [ AuthGuard ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
