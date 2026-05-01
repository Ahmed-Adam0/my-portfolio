import { Component, Input, OnInit, ViewChild, ElementRef, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-smooth-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-container" [attr.data-visible]="isVisible">
      <div class="progress-label">
        <span class="label-text">{{ label }}</span>
        <span class="percentage">{{ percentage }}%</span>
      </div>
      <div class="progress-bar-bg">
        <div
          #progressBar
          class="progress-bar-fill"
          [style.width.%]="0"
          [attr.aria-valuenow]="percentage"
          [attr.aria-valuemin]="0"
          [attr.aria-valuemax]="100"
          role="progressbar"
        >
          <div class="progress-shimmer"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container {
      margin: 24px 0;
      opacity: 0.5;
      transition: opacity 0.6s ease-out;
    }

    .progress-container[data-visible="true"] {
      opacity: 1;
    }

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 14px;
    }

    .label-text {
      font-weight: 600;
      color: var(--text-primary, #f1f5f9);
    }

    .percentage {
      color: var(--accent-primary, #0ea5e9);
      font-weight: 700;
      font-size: 15px;
    }

    .progress-bar-bg {
      width: 100%;
      height: 8px;
      background: var(--bg-tertiary, #334155);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(var(--shadow-color-rgb, 0, 0, 0), 0.1);
      position: relative;
    }

    .progress-bar-fill {
      height: 100%;
      background: linear-gradient(
        90deg,
        var(--accent-primary, #0ea5e9),
        var(--accent-secondary, #6366f1)
      );
      border-radius: 10px;
      position: relative;
      box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
      transition: width 1.5s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .progress-shimmer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `],
  animations: [
    trigger('progressState', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})
export class SmoothProgressBarComponent implements OnInit {
  @Input() label: string = '';
  @Input() percentage: number = 0;
  @Input() trigger: boolean = false;

  @ViewChild('progressBar') progressBar!: ElementRef;

  private animationService = inject(AnimationService);
  isVisible = false;

  constructor() {
    effect(() => {
      if (this.trigger && !this.isVisible) {
        this.isVisible = true;
        this.animateProgress();
      }
    });
  }

  ngOnInit(): void {
    // Progress can be triggered manually via input
  }

  private animateProgress(): void {
    if (this.progressBar) {
      setTimeout(() => {
        this.animationService.animateProgress(
          this.progressBar.nativeElement,
          this.percentage,
          1.5
        );
      }, 100);
    }
  }

  public triggerAnimation(): void {
    if (this.progressBar) {
      this.isVisible = true;
      this.animateProgress();
    }
  }
}
