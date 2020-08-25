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
  users: Array<IUser>;
  posts: any;

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

    // this.activatedRoute.params.subscribe(params => {
    //   this.userService.getUserByIdViaRest(+params['userId']).subscribe(
    //     user => this.user = user,
    //     err => console.log("Got an error while fetching the user details: ", err),
    //     () => alert('Fetch of User Details Completed!')
    //   );
    // });
    this.activatedRoute.data.subscribe(
      (res) => {
        console.log(res);
        this.user = res.user;
      }
    )
  }

  createUser() {
    this.user.id = null;
    this.userService.createUser(this.user).subscribe(
      user => alert(`A new user was created with an id: ${user.id}`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Creation of user completed!')
    );
  }
  updateUser() {
    this.user.name = 'Sam Kolder';
    this.user.email = 'sam.kolder@example.com';
    this.userService.updateUser(this.user).subscribe(
      user => alert(`The user was updated`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Updation of user completed!')
    );
  }
  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(
      user => alert(`The user was deleted`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Deletion of user completed!')
    );
  }
  getUserPosts() {
    this.posts = this.userService.getUserPosts(this.user.id);
  }
}
