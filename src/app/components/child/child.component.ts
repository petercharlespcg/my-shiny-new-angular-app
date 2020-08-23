import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush/* Default */
})
export class ChildComponent implements OnInit {
  @Input() user: { name: string };

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }
}
