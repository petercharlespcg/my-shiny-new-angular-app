import { CustomValidations } from './../../classes/custom-validations';
import { filter } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', /* Validators.required */[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('John Doe')
      ]),
      username: new FormControl('johndoe', null, CustomValidations.asyncUnique),
      email: new FormControl('john.doe@example.com'),
      phone: new FormControl('9876543210'),
      website: new FormControl('john.com'),
      address: new FormGroup({
        street: new FormControl('123 NE St'),
        suite: new FormControl('Suite 1400'),
        city: new FormControl('Bellevue'),
        zipcode: new FormControl('98004'),
        geo: new FormGroup({
          lat: new FormControl('122.32434'),
          lng: new FormControl('-12321.234'),
        }),
      }),
      company: new FormGroup({
        name: new FormControl('Beautiful Destination'),
        catchPhrase: new FormControl('See world differently'),
        bs: new FormControl('A company that creates beautiful content for travel boards and hotel'),
      }),
      hobbies: new FormArray([])
    });
  }

  addHobby() {
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(index) {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  submit() {

  }

  resetForm() {
    this.userForm.reset();
  }

}
