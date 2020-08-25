import { UserService } from './../../services/user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnDestroy {

  prop: string;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userService.propChanged.subscribe(
      prop => this.prop = prop,
      err => console.log(err),
      () => alert('The Observable was complete')
    );
  }

  changeProp() {
    this.userService.setProp('bar');
  }

}
