import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { AnimationService } from '../../services/animation.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('heroAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('ctaAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('600ms 600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  private animationService = inject(AnimationService);

  roles = ['Full Stack Developer', 'Creative Coder', 'UI/UX Enthusiast'];
  currentRole = this.roles[0];
  roleIndex = 0;

  ngOnInit(): void {
    this.rotateRoles();
  }

  private rotateRoles(): void {
    setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.roleIndex];
    }, 4000);
  }

  scrollToProjects(): void {
    const projectsSection = document.querySelector('app-projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }
}
