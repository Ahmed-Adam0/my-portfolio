import { Component, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SmoothProgressBarComponent } from '../smooth-progress-bar/smooth-progress-bar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, SmoothProgressBarComponent],
  template: `
    <section id="skills" class="skills-section" data-aos="fade-up">
      <div class="skills-container">
        <div class="section-header">
          <h2>{{ 'skills.title' | translate }}</h2>
          <p class="subtitle">{{ 'skills.description' | translate }}</p>
        </div>

        <div class="skills-grid">
          <!-- Frontend Category -->
          <div class="skills-card glass-effect">
            <h3>{{ 'skills.frontend' | translate }}</h3>
            <div class="progress-list">
              <app-smooth-progress-bar
                *ngFor="let skill of frontendSkills"
                [label]="skill.name"
                [percentage]="skill.level"
                [trigger]="skillsTriggered"
              ></app-smooth-progress-bar>
            </div>
          </div>

          <!-- Backend Category -->
          <div class="skills-card glass-effect">
            <h3>{{ 'skills.backend' | translate }}</h3>
            <div class="progress-list">
              <app-smooth-progress-bar
                *ngFor="let skill of backendSkills"
                [label]="skill.name"
                [percentage]="skill.level"
                [trigger]="skillsTriggered"
              ></app-smooth-progress-bar>
            </div>
          </div>

          <!-- Databases Category -->
          <div class="skills-card glass-effect">
            <h3>{{ 'skills.databases' | translate }}</h3>
            <div class="progress-list">
              <app-smooth-progress-bar
                *ngFor="let skill of databaseSkills"
                [label]="skill.name"
                [percentage]="skill.level"
                [trigger]="skillsTriggered"
              ></app-smooth-progress-bar>
            </div>
          </div>

          <!-- Practices & Tools Category -->
          <div class="skills-card glass-effect">
            <h3>{{ 'skills.tools' | translate }}</h3>
            <div class="progress-list">
              <app-smooth-progress-bar
                *ngFor="let skill of toolSkills"
                [label]="skill.name"
                [percentage]="skill.level"
                [trigger]="skillsTriggered"
              ></app-smooth-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 80px 0;
      position: relative;
    }
    .skills-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 24px;
    }
    .section-header {
      text-align: center;
      margin-bottom: 50px;
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
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
    }
    .skills-card {
      padding: 32px;
      border-radius: 28px;
      background: rgba(var(--bg-secondary-rgb), 0.4);
      border: 1px solid rgba(var(--border-color-rgb), 0.1);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .skills-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent-primary);
    }
    .skills-card h3 {
      font-size: 1.4rem;
      margin-bottom: 24px;
      color: var(--text-primary);
      background: none;
      -webkit-text-fill-color: initial;
      background-clip: initial;
      border-bottom: 2px solid rgba(var(--border-color-rgb), 0.2);
      padding-bottom: 12px;
    }
    .progress-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `]
})
export class SkillsComponent implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  skillsTriggered = false;

  frontendSkills = [
    { name: 'Angular (20, Standalone, Signals)', level: 90 },
    { name: 'TypeScript / JavaScript', level: 85 },
    { name: 'RxJS State Management', level: 80 },
    { name: 'HTML5 & CSS3 / Bootstrap', level: 90 }
  ];

  backendSkills = [
    { name: 'ASP.NET Core / MVC', level: 85 },
    { name: 'Entity Framework Core / LINQ', level: 85 },
    { name: 'RESTful APIs & JWT Auth', level: 90 },
    { name: 'Clean / Onion Architecture & CQRS', level: 80 }
  ];

  databaseSkills = [
    { name: 'SQL Server', level: 80 },
    { name: 'MySQL', level: 75 }
  ];

  toolSkills = [
    { name: 'SOLID Principles & OOP / MediatR', level: 85 },
    { name: 'RabbitMQ (Message Broker)', level: 75 },
    { name: 'Serilog (Logging) / Swagger', level: 85 },
    { name: 'Git & GitHub', level: 85 }
  ];

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.skillsTriggered = true;
              this.observer?.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
