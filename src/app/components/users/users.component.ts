import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(/* private userService: UserService, */ private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.users = this.userService.getUsers();

    // this.ActivatedRoute.data.forEach( data => this.users = data.testusers );
    // this.users = this.ActivatedRoute.snapshot.data.testusers;
    this.ActivatedRoute.data.subscribe( (res) => {
      // here you will get your data from resolve guard.
      console.log(res);
      this.users = res.testusers;
    });
  }



}
