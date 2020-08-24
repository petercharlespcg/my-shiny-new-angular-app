import { MessageComponent } from './../message/message.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, ContentChildren } from '@angular/core';
import { CanComponentDeactivate } from "../../guards/confirmation/confirmation.guard";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, AfterViewInit, AfterContentInit, CanComponentDeactivate {

  @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;
  @ViewChildren(MessageComponent) allMessageComponents: QueryList<MessageComponent>;

  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  @ContentChild('tempMessage') tempMessageComponent: MessageComponent;
  @ContentChildren(MessageComponent) allProjectedMessageComponents: QueryList<MessageComponent>;

  messages: string[] = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
  ];

  constructor() {
    // this.firstMessageComponent.message = 'Changed the message from message list constructor';
  }
  confirm(): boolean {
    return confirm('Are you sure you want to navigate away?');
  }
  ngAfterContentInit(): void {
    // this.firstProjectedMessageComponent.message = 'This was changed from message list component\'s ngAfterContentInit method';
    this.allProjectedMessageComponents.toArray().forEach(m =>
      m.message = 'Changed the message from message list constructor');
    this.tempMessageComponent.message = 'This projected message was also changed';
  }
  ngAfterViewInit(): void {
    // this.firstMessageComponent.message = 'This was changed from message list component\'s ngAfterViewInit method';
    this.allMessageComponents.toArray().forEach(m => {
      m.message= 'This was changed from message list component\'s ngAfterViewInit method';
    });
  }

  ngOnInit(): void {
  }

}
