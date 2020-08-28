import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  user: { name: string } = { name: 'Jacob'};
  users: IUser[];
  filterIdType: string = '';

  // dateToday: string;
  dateToday: Date;

  changeProperty() {
    this.user.name = 'Sam';
  }

  changeObject() {
    this.user = { name: 'Tom' };
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.dateToday = new Date().toDateString();
    this.dateToday = new Date();
    this.users = this.userService.getUsers();
    // this.userService.getUsersViaREST().subscribe(
    //   users => this.users = users
    // );
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacb Riglin',
      email: 'jacob@domain.com'
    })
  }

}
