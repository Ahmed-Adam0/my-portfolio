# 📋 Quick Copy-Paste Code Reference

## 1. Update app.component.html

```html
<header class="header" [@pageAnimation]>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="#home">Portfolio</a>
      </div>
      <app-theme-language-toggle></app-theme-language-toggle>
    </div>
  </nav>
</header>

<main [@pageAnimation]>
  <app-hero></app-hero>
  <app-projects></app-projects>
  <app-contact></app-contact>
</main>
```

---

## 2. Import in App Component

Copy this to `app.component.ts` imports:

```typescript
import { CommonModule } from '@angular/common';
import { ThemeLanguageToggleComponent } from "./features/theme-language-toggle/theme-language-toggle.component";
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { AnimationService } from './services/animation.service';
import { trigger, transition, style, animate } from '@angular/animations';
```

---

## 3. Add to Hero Component Imports

```typescript
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { AnimationService } from '../../services/animation.service';
import { trigger, transition, style, animate } from '@angular/animations';
```

---

## 4. Add to Projects Component Imports

```typescript
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TiltDirective } from '../../directives/tilt.directive';
import { AnimationService } from '../../services/animation.service';
```

---

## 5. Add to Contact Component Imports

```typescript
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';
```

---

## 6. CSS Variables Usage Examples

```css
/* Light/Dark Theme Colors */
background: var(--bg-primary);
color: var(--text-primary);
border: 1px solid var(--border-color);
box-shadow: 0 8px 24px var(--shadow-color);

/* Accent Colors */
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));

/* Use Glassmorphism */
.my-element {
  background: rgba(var(--bg-secondary-rgb), 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--border-color-rgb), 0.2);
}
```

---

## 7. Using AOS (Animate On Scroll)

```html
<!-- Fade up animation -->
<div data-aos="fade-up">Content</div>

<!-- Fade from left -->
<div data-aos="fade-left">Content</div>

<!-- With delay (in milliseconds) -->
<div data-aos="fade-up" data-aos-delay="200">Content</div>

<!-- Trigger animation again -->
<div data-aos="fade-up" data-aos-once="false">Content</div>
```

---

## 8. Using Typewriter Directive

```html
<span
  [appTypewriter]="'Full Stack Developer'"
  [speed]="100"
  [delay]="500"
  [shouldLoop]="true"
></span>
```

---

## 9. Using Tilt Directive on Cards

```html
<div
  class="project-card"
  [appTilt]="{ tiltScale: 1.08, tiltRotation: 8 }"
>
  <!-- Card content -->
</div>
```

---

## 10. Using Smooth Progress Bar Component

```html
<app-smooth-progress-bar
  [label]="'Angular'"
  [percentage]="90"
  [trigger]="isVisible"
></app-smooth-progress-bar>
```

---

## 11. Language Toggle Usage

```typescript
import { LanguageService } from './services/language.service';

export class MyComponent {
  constructor(public languageService: LanguageService) {}
  
  // Access current language
  getCurrentLang() {
    return this.languageService.getLanguage();
  }
  
  // Check if RTL
  isRTL = this.languageService.isRTL();
}
```

---

## 12. Theme Toggle Usage

```typescript
import { ThemeService } from './services/theme.service';

export class MyComponent {
  constructor(public themeService: ThemeService) {}
  
  // Get current theme
  theme = this.themeService.theme$();
  
  // Toggle theme
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
```

---

## 13. Using Animation Service

```typescript
import { AnimationService } from './services/animation.service';

export class MyComponent implements AfterViewInit {
  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit() {
    // Animate element in
    this.animationService.animateElementIn(element, 0.2);
    
    // Animate counter
    this.animationService.animateCounter(element, 0, 100, 2);
    
    // Animate progress bar
    this.animationService.animateProgress(element, 85, 1.5);
    
    // Refresh AOS
    this.animationService.refreshAOS();
  }
}
```

---

## 14. Translation Key Structure

Used in `.json` files:

```json
{
  "nav": {
    "home": "Home"
  },
  "hero": {
    "greeting": "Hello, I'm",
    "title": "Full Stack Developer"
  },
  "projects": {
    "title": "Featured Projects",
    "viewDetails": "View Details"
  }
}
```

Used in templates:

```html
{{ 'nav.home' | translate }}
{{ 'hero.greeting' | translate }}
{{ 'projects.title' | translate }}
```

---

## 15. Responsive Media Queries Reference

```css
/* Desktop */
@media (min-width: 1200px) {
  /* Desktop styles */
}

/* Tablet */
@media (max-width: 768px) {
  /* Tablet styles */
}

/* Mobile */
@media (max-width: 480px) {
  /* Mobile styles */
}
```

---

## 16. Animation Classes Available

```html
<!-- Fade animations -->
<div class="fade-in-up">Fades in and slides up</div>
<div class="fade-in-left">Fades in from left</div>
<div class="fade-in-right">Fades in from right</div>

<!-- Special effects -->
<div class="pulse-glow">Pulsing glow effect</div>
<div class="float">Floating animation</div>
```

---

## 17. Button Styles Reference

```html
<!-- Primary Button (Gradient) -->
<button class="btn btn-primary">
  <span>View My Work</span>
  <span class="arrow">→</span>
</button>

<!-- Secondary Button (Outline) -->
<button class="btn btn-secondary">
  <span>Learn More</span>
</button>
```

---

## 18. Glass Effect Components

```html
<!-- Mild glass effect -->
<div class="glass-effect">
  <!-- Content -->
</div>

<!-- Strong glass effect -->
<div class="glass-effect-strong">
  <!-- Content -->
</div>
```

---

## 19. Gradient Border Effect

```html
<div class="gradient-border">
  <!-- Content will have gradient border -->
</div>
```

---

## 20. Setup Responsive Container

```html
<div class="container">
  <!-- Content automatically responsive -->
</div>
```

---

## 🎨 Color Scheme

### Dark Mode (Default)
```
Background: #0f172a
Secondary: #1e293b
Accent Primary: #0ea5e9 (Sky Blue)
Accent Secondary: #6366f1 (Indigo)
Text: #f1f5f9
```

### Light Mode
```
Background: #f8fafc
Secondary: #f1f5f9
Accent Primary: #0ea5e9 (Sky Blue)
Accent Secondary: #6366f1 (Indigo)
Text: #1e293b
```

---

## ⚡ Performance Tips

1. Use `OnPush` change detection for components
2. Lazy load images with AOS
3. Use `trackBy` in *ngFor loops
4. Unsubscribe from observables in ngOnDestroy
5. Use async pipe for observables in templates

---

## 🔗 Quick Commands

```bash
# Start dev server
npm start

# Build for production
npm build

# Run tests
npm test

# Install all dependencies
npm install

# Update packages
npm update
```

---

**Last Updated**: 2024
**Status**: Ready to Use
