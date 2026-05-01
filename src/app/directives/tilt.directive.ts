import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  @Input() tiltScale: number = 1.05;
  @Input() tiltRotation: number = 5;
  @Input() tiltTransition: string = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)';

  private element: HTMLElement;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
    this.element.style.perspective = '1000px';
    this.element.style.transformStyle = 'preserve-3d';
    this.element.style.transition = this.tiltTransition;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.updateTilt(event);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.resetTilt();
  }

  private updateTilt(event: MouseEvent): void {
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * this.tiltRotation * 2;
    const rotateY = ((x / rect.width) - 0.5) * this.tiltRotation * -2;

    this.element.style.transform = `
      scale(${this.tiltScale})
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  }

  private resetTilt(): void {
    this.element.style.transform = `
      scale(1)
      rotateX(0deg)
      rotateY(0deg)
    `;
  }
}
