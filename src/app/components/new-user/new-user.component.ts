import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() { }

  ngOnInit(): void {
    this.genders = [ 'Male', 'Female', 'Other'];
    this.communicationModes = [ 'Phone', 'Email' ];
  }

  submit(userForm) {
    console.log('Form Submitted!', userForm);
  }

}
