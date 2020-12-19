import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() backgroundColor: string;
  @Input() itemColor: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBackgroundColor(this.backgroundColor || '#3f51b5');
    this.setItemColor(this.itemColor || 'white');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBackgroundColor(null);
    this.setItemColor(null);
  }

  private setBackgroundColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private setItemColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
