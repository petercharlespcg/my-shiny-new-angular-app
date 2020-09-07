import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];
  userList: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.genders = [ 'Male', 'Female', 'Other'];
    this.communicationModes = [ 'Phone', 'Email' ];
  }

  submit(userForm: NgForm) {
    console.log('Form Submitted!', userForm);
    this.userService.addAUserToFirebase(userForm.value);
  }

  getUsers() {
    this.userService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
      this.userList = [];
      usersSnapshot.forEach(userSnapshot => {
        let user = userSnapshot.payload.toJSON();
        user['$key'] = userSnapshot.key;
        this.userList.push(user as IUser);
      })
    })
  }

  updateUser(userForm: NgForm) {
    this.userList[1].name = userForm.value.name;
    this.userService.updateAUserOnFirebase(this.userList[1]);
  }

  deleteUser() {
    this.userService.deleteAUserFromFirebase(this.userList[1].$key);
  }

}
