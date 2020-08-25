import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from "./../../interfaces/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;;

  users: Array <IUser>;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    // this.users = this.userService.getUsers();

    // this.activatedRoute.params.subscribe((params) => {
      // console.log('Got the params as: ', params);
      // this.user = this.users.filter((user) => {
      //   return user.id === +params.userId;
      // })[0];

      // this.activatedRoute.queryParams.subscribe((qs) => console.log('Got the QS as : ', qs));
    // });

/*     this.activatedRoute.params.toPromise().then(params =>
            this.userService.getUserByIdViaRest(+params['userId']).subscribe(
        user => this.user = user,
        err => console.log("Got an error while fetching the user details: ", err),
        () => alert('Fetch of User Details Completed!')
      )); */
      
    this.activatedRoute.params.subscribe( params => {
      this.userService.getUserByIdViaRest(+params['userId']).subscribe(
        user => this.user = user,
        err => console.log("Got an error while fetching the user details: ", err),
        () => alert('Fetch of User Details Completed!')
      );
    });
  }

}
