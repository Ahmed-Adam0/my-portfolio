import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit, OnDestroy {
  @Input() appTypewriter: string = '';
  @Input() speed: number = 100;
  @Input() delay: number = 0;
  @Input() shouldLoop: boolean = false;

  private charIndex = 0;
  private timeout: any;
  private isRunning = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  private startTypewriter(): void {
    this.timeout = setTimeout(() => {
      this.type();
    }, this.delay);
  }

  private type(): void {
    if (this.charIndex < this.appTypewriter.length) {
      this.el.nativeElement.textContent += this.appTypewriter.charAt(this.charIndex);
      this.charIndex++;
      this.timeout = setTimeout(() => {
        this.type();
      }, this.speed);
    } else if (this.shouldLoop) {
      this.timeout = setTimeout(() => {
        this.reset();
      }, 1000);
    }
  }

  private reset(): void {
    this.charIndex = 0;
    this.el.nativeElement.textContent = '';
    this.type();
  }
}
