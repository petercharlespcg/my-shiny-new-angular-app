import { Component, Input } from '@angular/core';
import { HookLogger } from 'src/app/decorators/class.decorator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
@HookLogger()
export class UserComponent {

  @Input() user;

}
