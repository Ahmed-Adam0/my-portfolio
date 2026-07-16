import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./features/hero/hero.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { TimelineComponent } from "./features/timeline/timeline.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ThemeLanguageToggleComponent } from "./features/theme-language-toggle/theme-language-toggle.component";
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { AnimationService } from './services/animation.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    ContactComponent,
    ThemeLanguageToggleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);
  private animationService = inject(AnimationService);

  ngOnInit(): void {
    // Initialize theme and language services
    this.themeService.getTheme();
    this.languageService.getLanguage();
    
    // Initialize AOS animations
    this.animationService.refreshAOS();
  }
}

