import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="about" class="about-section" data-aos="fade-up">
      <div class="about-container">
        <div class="section-header">
          <h2>{{ 'about.title' | translate }}</h2>
          <p class="subtitle">{{ 'about.subtitle' | translate }}</p>
        </div>
        <div class="about-content glass-effect">
          <p class="about-text">
            {{ 'about.description' | translate }}
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 80px 0;
      position: relative;
    }
    .about-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .section-header {
      text-align: center;
      margin-bottom: 40px;
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
    .about-content {
      padding: 40px;
      border-radius: 28px;
      background: rgba(var(--bg-secondary-rgb), 0.4);
      border: 1px solid rgba(var(--border-color-rgb), 0.1);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      max-width: 900px;
      margin: 0 auto;
    }
    .about-text {
      font-size: 1.15rem;
      line-height: 1.9;
      color: var(--text-secondary);
      text-align: justify;
    }
    :host-context([dir="rtl"]) .about-text {
      text-align: justify;
    }
    @media (max-width: 768px) {
      .about-content {
        padding: 24px;
      }
      .about-text {
        font-size: 1rem;
        line-height: 1.7;
      }
    }
  `]
})
export class AboutComponent {
  languageService = inject(LanguageService);
}
