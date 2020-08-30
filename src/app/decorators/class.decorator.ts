import { Component } from '@angular/core';
export function Sticker(configuration) {
  return function (target) {
    target.prototype.stickers = configuration.stickers;
  }
}

export function HookLogger(configuration?) {
  return function (target) {

    const componentName = target.name;
    const defaultHooks: string[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy',
    ];

    let hooksToBeLogged = (configuration && configuration.hooks) || defaultHooks;

    hooksToBeLogged.forEach(element => {
      const original = target.prototype[element];
      target.prototype[element] = function (...args) {
        console.log(`Component Name: ${componentName} | Hook Name: ${element} | `, ...args);
        original && original.apply(this.args);
      }
    });
  }
}
