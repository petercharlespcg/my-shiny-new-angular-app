import { Directive, ElementRef, OnInit, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective implements OnInit {

  // @Input() case: string;
  @Input('appChangeCase') case: string;

  @HostListener('blur') onBlur() {
    let changedValue: string = this.case === 'upper' ? this.elRef.nativeElement.value.toUpperCase() : this.elRef.nativeElement.value.toLowerCase();
    this.render.setProperty(this.elRef.nativeElement, 'value', changedValue)
  }

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement.value);
  }



}
