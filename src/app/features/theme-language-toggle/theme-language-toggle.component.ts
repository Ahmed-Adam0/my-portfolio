import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-theme-language-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toggle-container" [attr.data-theme]="themeService.theme$()">
      <!-- Theme Toggle Button -->
      <button
        class="toggle-btn theme-toggle"
        (click)="toggleTheme()"
        [attr.aria-label]="'Toggle ' + themeService.theme$()"
        [@toggleAnimation]="themeService.theme$()"
      >
        <span class="icon-wrapper">
          <svg *ngIf="themeService.theme$() === 'dark'" 
               class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg *ngIf="themeService.theme$() === 'light'" 
               class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </span>
      </button>

      <!-- Language Toggle Button -->
      <button
        class="toggle-btn language-toggle"
        (click)="toggleLanguage()"
        [attr.aria-label]="'Toggle Language'"
        [@toggleAnimation]="languageService.language$()"
      >
        <span class="language-text">
          {{ languageService.getLanguage() === 'en' ? 'AR' : 'EN' }}
        </span>
      </button>
    </div>
  `,
  styles: [`
    .toggle-container {
      display: flex;
      gap: 12px;
      align-items: center;
      padding: 8px 12px;
      background: rgba(var(--bg-secondary-rgb, 30, 41, 59), 0.5);
      border-radius: 50px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(var(--border-color-rgb, 51, 65, 85), 0.3);
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    }

    .toggle-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
      color: var(--text-primary, #f1f5f9);
      font-weight: 600;
      font-size: 14px;
    }

    .toggle-btn:hover {
      background: rgba(14, 165, 233, 0.1);
      transform: scale(1.1);
    }

    .toggle-btn:active {
      transform: scale(0.95);
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      width: 20px;
      height: 20px;
      stroke-width: 2;
    }

    .language-text {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    :host-context([data-theme="light"]) .toggle-container {
      background: rgba(241, 245, 249, 0.5);
      border-color: rgba(226, 232, 240, 0.5);
    }
  `],
  animations: [
    trigger('toggleAnimation', [
      state('dark', style({ transform: 'rotate(0deg)' })),
      state('light', style({ transform: 'rotate(0deg)' })),
      state('en', style({ transform: 'scale(1)' })),
      state('ar', style({ transform: 'scale(1)' })),
      transition('dark <=> light', [
        animate('400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ transform: 'rotate(360deg)' }))
      ]),
      transition('en <=> ar', [
        animate('300ms cubic-bezier(0.23, 1, 0.320, 1)', style({ transform: 'scale(1.2)' }))
      ])
    ])
  ]
})
export class ThemeLanguageToggleComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
