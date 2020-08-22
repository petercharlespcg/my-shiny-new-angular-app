import {
  Input,
  Output,
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnInit, OnDestroy /* OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy */ {
  @Input() note: string;
  @Input() noteIndex: number;
  @Output() deleteNote: EventEmitter<number> = new EventEmitter<number>();
  intervalId: number;
  timer: number = 0;
  timeoutId: number;

  handleDeleteClick() {
    this.deleteNote.emit(this.noteIndex);
  }

  // constructor() {
  //   console.log(
  //     `%c NoteListItemComponent::constructor: Called on Component/Directive instantiation by Angular: ${
  //       this.note
  //     }`,
  //     "color: white; background-color: black;"
  //   )
  // }

  // ngOnChanges(simpleChanges: SimpleChanges) {
  //   console.log(
  //     `%c NoteListItemComponent::ngOnChanges: Called on every @Input property change ${JSON.stringify(
  //       simpleChanges
  //     )}`,
  //     "color: blue"
  //   );
  // }

  ngOnInit(): void {
    console.log(
      `%c NoteListItemComponent::ngOnInit: Called after first ngOnChanges ${
        this.note
      }`,
      "color: green"
    );
    this.intervalId = setInterval(() => {
      this.timer++;
      console.log('Timer logged from the setInterval!: ', this.timer);
    }, 1000);
    this.timeoutId = setTimeout(() => console.log('Logged from the setTimeout!', 5000));
  }

  // // Avoid writing anything in this function.
  // // It can cost a lot of performance.
  // ngDoCheck() {
  //   console.log(
  //     "%c NoteListItemComponent::ngDoCheck: Called after first ngOnInit and then after every ngOnChanges",
  //     "color: orange"
  //   );
  // }

  // ngAfterContentInit() {
  //   console.log(
  //     "%c NoteListItemComponent::ngAfterContentInit: Called after first ngDoCheck when Angular has finished projecting content in Child Component",
  //     "color: green"
  //   );
  // }

  // // Avoid writing anything in this function
  // // It can cost a lot of performance.
  // ngAfterContentChecked() {
  //   console.log(
  //     "%c NoteListItemComponent::ngAfterContentChecked: Called once after Angular has checked the Projected Content while running it's changedDetection cycle and after every ngDoCheck",
  //     "color: orange"
  //   );
  // }

  // ngAfterViewInit() {
  //   console.log(
  //     "%c NoteListItemComponent::ngAfterViewInit: Called once after Angular has initialized the view of a component and all it's children",
  //     "color: green"
  //   );
  // }

  // // Avoid writing anything in this function
  // // It can cost a lot of performance.
  // ngAfterViewChecked() {
  //   console.log(
  //     "%c NoteListItemComponent::ngAfterViewChecked: Called once after Angular has checked the View of a Component and all it's children while running it's changeDetection cycle and after every ngAfterContentChecked",
  //     "color: orange"
  //   );
  // }

  ngOnDestroy() {
    console.log(
      "%c NoteListItemComponent::ngOnDestroy: Called right before Angular is about to unmount a Component from the DOM",
      "color: red"
    );
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }
}
