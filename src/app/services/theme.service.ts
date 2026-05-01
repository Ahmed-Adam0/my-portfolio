import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  
  private currentTheme = signal<Theme>(this.getInitialTheme());
  public theme$ = this.currentTheme.asReadonly();

  constructor() {
    this.setupTheme();
    
    // Auto-detect system preference if no saved theme
    if (!localStorage.getItem(this.THEME_KEY)) {
      this.detectSystemPreference();
    }
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    return savedTheme || 'dark';
  }

  private setupTheme(): void {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.THEME_KEY, theme);
      this.applyThemeVariables(theme);
    });
  }

  private detectSystemPreference(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.setTheme('light');
    }
  }

  private applyThemeVariables(theme: Theme): void {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--bg-tertiary', '#334155');
      root.style.setProperty('--text-primary', '#f1f5f9');
      root.style.setProperty('--text-secondary', '#cbd5e1');
      root.style.setProperty('--accent-primary', '#0ea5e9');
      root.style.setProperty('--accent-secondary', '#6366f1');
      root.style.setProperty('--border-color', '#334155');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      root.style.setProperty('--bg-primary', '#f8fafc');
      root.style.setProperty('--bg-secondary', '#f1f5f9');
      root.style.setProperty('--bg-tertiary', '#e2e8f0');
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--accent-primary', '#0ea5e9');
      root.style.setProperty('--accent-secondary', '#6366f1');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  public setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  public getTheme(): Theme {
    return this.currentTheme();
  }
}
