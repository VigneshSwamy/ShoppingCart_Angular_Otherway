import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductGreyHighlight]'
})
export class ProductGreyHighlightDirective {

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  

}
