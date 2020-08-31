import { Laptop } from './../../classes/laptop';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { HookLogger, Readonly } from 'src/app/decorators/class.decorator';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@HookLogger({
  hooks: [
    'ngOnInit',
    'ngAfterViewInit'
  ]
})
export class ParentComponent implements OnInit {
  @Readonly('This is a readonly string and will not change!') readonly: string;
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
    // this.dateToday = new Date();
    // this.users = this.userService.getUsers();
    // this.userService.getUsersViaREST().subscribe(
    //   users => this.users = users
    // );
    let laptop: Laptop = new Laptop();
    // console.log(laptop['stickers']);
    console.log(this.readonly);
    this.readonly = 'This was changed';
    console.log(this.readonly);
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacb Riglin',
      email: 'jacob@domain.com'
    })
  }

}
