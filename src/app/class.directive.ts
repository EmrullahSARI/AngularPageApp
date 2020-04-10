import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor( private element: ElementRef ) {
    console.log( `Directive Initialized: ${this.element.nativeElement}`,
    this.element.nativeElement );
  }

  // You can use <elem appClass [pushSomeText]="string" ...
  @Input() set pushSomeText( value: string ) {
    this.element.nativeElement.innerHTML = value;
  }

  // Or you can use <elem [appClass]="string" ....
  @Input() set appClass( value: string ) {
    this.element.nativeElement.innerHTML = value;
  }

  // or you can use <elem [appClass]="string" ... #This is best way...
  @Input('appClass') set pushSomeText_( value: string ) {
    this.element.nativeElement.innerHTML = value;
  }

  // or you can use like ngClass binding for changing classes with object
  // <elem [appClass]="{active: true/false ..." ...
  @Input('appClass') set classNames( classObj: any ) {
    for ( const key in classObj ) {
      if ( classObj[ key ] ) {
        this.element.nativeElement.classList.add( key );
      } else {
        this.element.nativeElement.classList.remove( key );
      }
    }
  }
}
