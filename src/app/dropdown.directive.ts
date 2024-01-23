import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2){}
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let element = this.el.nativeElement.querySelector('.dropdown-menu');
    console.log(element);
    if(this.isOpen) this.renderer.addClass(element, 'show');
    else this.renderer.removeClass(element, 'show');
  }

}
