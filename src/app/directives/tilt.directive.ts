import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  @Input() tiltScale: number = 1.05;
  @Input() tiltRotation: number = 10;
  @Input() tiltSpeed: number = 400;

  private originalTransform = '';
  private isMoving = false;
  private timeoutId: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.originalTransform = this.el.nativeElement.style.transform || '';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMoving) return;
    this.isMoving = true;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * this.tiltRotation;
    const rotateY = ((centerX - x) / centerX) * this.tiltRotation;

    const transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${this.tiltScale})`;
    
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.tiltSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`);
    
    setTimeout(() => this.isMoving = false, 16);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
      this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.tiltSpeed}ms ease-out`);
    }, 50);
  }
}