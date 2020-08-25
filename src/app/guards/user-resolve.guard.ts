import { UserService } from './../services/user/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolveGuard implements Resolve<IUser> {

  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    // return this.userService.getUserByIdViaRest(route.paramMap.get('userId'));
    return this.userService.getUserByIdViaRest(route.params['userId']);
  }



}
