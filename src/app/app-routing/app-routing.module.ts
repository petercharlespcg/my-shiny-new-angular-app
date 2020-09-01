import { NewUserComponent } from './../components/new-user/new-user.component';
import { UserResolveGuard } from './../guards/user-resolve.guard';
import { BuiltInStrDirComponent } from './../components/built-in-str-dir/built-in-str-dir.component';
import { ParentComponent } from './../components/parent/parent.component';
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
import { BuiltInAttrDirComponent } from '../components/built-in-attr-dir/built-in-attr-dir.component';
import { DirectiveHostComponent } from '../components/directive-host/directive-host.component';
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
      { path: ':userId', component: UserDetailsComponent, resolve: { user: UserResolveGuard} },
      { path: '', component: PlaceholderComponent },
  ] },
  { path: 'parent', component: ParentComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ]},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
]

@NgModule({
  providers: [ AuthGuard ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
