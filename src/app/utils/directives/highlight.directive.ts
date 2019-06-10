import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseout') onMouseLeave() {
    this.highlight('inherit');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
