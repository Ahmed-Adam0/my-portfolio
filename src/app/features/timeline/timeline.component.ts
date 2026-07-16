import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="timeline" class="timeline-section" data-aos="fade-up">
      <div class="timeline-container">
        <div class="section-header">
          <h2>{{ 'timeline.title' | translate }}</h2>
          <p class="subtitle">{{ 'timeline.subtitle' | translate }}</p>
        </div>

        <div class="timeline-track">
          <!-- Timeline Vertical Line -->
          <div class="timeline-line"></div>

          <!-- Timeline Items -->
          <div
            *ngFor="let item of timelineItems; let i = index"
            class="timeline-item"
            [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'"
            [attr.data-aos-delay]="100 + i * 100"
          >
            <!-- Badge Icon -->
            <div class="timeline-badge">{{ item.icon }}</div>

            <!-- Card Content -->
            <div class="timeline-card glass-effect">
              <span class="time-period">{{ 'timeline.' + item.key + '.period' | translate }}</span>
              <h3>{{ 'timeline.' + item.key + '.title' | translate }}</h3>
              <p>{{ 'timeline.' + item.key + '.description' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-section {
      padding: 80px 0;
      position: relative;
    }
    .timeline-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
    }
    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .section-header h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 8px;
    }
    .subtitle {
      color: var(--accent-primary);
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .timeline-track {
      position: relative;
      margin-top: 40px;
    }
    /* Central vertical track line */
    .timeline-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 4px;
      background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
      transform: translateX(-50%);
      opacity: 0.3;
    }
    .timeline-item {
      position: relative;
      width: 50%;
      margin-bottom: 50px;
      padding: 0 40px;
      box-sizing: border-box;
    }
    /* Align cards alternatively left/right */
    .timeline-item:nth-child(odd) {
      left: 0;
      text-align: right;
    }
    .timeline-item:nth-child(even) {
      left: 50%;
      text-align: left;
    }
    /* Badges centered on vertical line */
    .timeline-badge {
      position: absolute;
      top: 20px;
      width: 50px;
      height: 50px;
      background: var(--bg-secondary);
      border: 3px solid var(--accent-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
      transition: all 0.3s ease;
    }
    .timeline-item:hover .timeline-badge {
      transform: scale(1.1) rotate(15deg);
      border-color: var(--accent-secondary);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
    }
    .timeline-item:nth-child(odd) .timeline-badge {
      right: -25px;
    }
    .timeline-item:nth-child(even) .timeline-badge {
      left: -25px;
    }
    /* Timeline Card Styles */
    .timeline-card {
      padding: 28px;
      border-radius: 24px;
      background: rgba(var(--bg-secondary-rgb), 0.4);
      border: 1px solid rgba(var(--border-color-rgb), 0.1);
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      cursor: pointer;
      position: relative;
    }
    .timeline-card:hover {
      transform: scale(1.03);
      border-color: var(--accent-primary);
      box-shadow: 0 20px 40px -12px rgba(14, 165, 233, 0.25);
    }
    .time-period {
      display: inline-block;
      padding: 6px 14px;
      background: rgba(14, 165, 233, 0.1);
      border: 1px solid var(--accent-primary);
      color: var(--accent-primary);
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .timeline-card h3 {
      font-size: 1.35rem;
      margin-bottom: 12px;
      color: var(--text-primary);
      background: none;
      -webkit-text-fill-color: initial;
      background-clip: initial;
    }
    .timeline-card p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--text-secondary);
      text-align: justify;
    }

    /* RTL Layout adjustments */
    :host-context([dir="rtl"]) .timeline-item:nth-child(odd) {
      text-align: left;
    }
    :host-context([dir="rtl"]) .timeline-item:nth-child(even) {
      text-align: right;
    }

    /* Responsive Mobile Layouts */
    @media (max-width: 768px) {
      .timeline-line {
        left: 24px;
      }
      .timeline-item {
        width: 100%;
        left: 0 !important;
        padding-left: 60px;
        padding-right: 0;
        text-align: left !important;
        margin-bottom: 35px;
      }
      :host-context([dir="rtl"]) .timeline-item {
        text-align: right !important;
        padding-right: 60px;
        padding-left: 0;
      }
      .timeline-badge {
        left: 0 !important;
      }
      :host-context([dir="rtl"]) .timeline-badge {
        right: 0 !important;
        left: auto !important;
      }
    }
  `]
})
export class TimelineComponent {
  timelineItems = [
    { key: 'cs', icon: '🎓' },
    { key: 'military', icon: '🎖️' },
    { key: 'route', icon: '💻' },
    { key: 'iti', icon: '🚀' },
    { key: 'current', icon: '💼' }
  ];
}
