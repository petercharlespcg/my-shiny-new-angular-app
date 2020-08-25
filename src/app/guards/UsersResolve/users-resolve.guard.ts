import { IUser } from './../../interfaces/user';
import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
// import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<IUser[]>/* CanLoad */ {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser[] | Observable<IUser[]> | Promise<IUser[]> {
    return this.userService.getUsersViaREST();/* .getUsers(); */

  }

  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
