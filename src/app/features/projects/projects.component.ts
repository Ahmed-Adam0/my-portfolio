import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TiltDirective } from '../../directives/tilt.directive';   // <-- مسار صحيح
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, TiltDirective],   // <-- موجود
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  private animationService = inject(AnimationService);

  projects = [
    {
      id: 1,
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      tags: ['Angular', 'ASP.NET Core', 'Clean Architecture', 'SignalR', 'SQL Server', 'Stripe'],
      icon: '🏠'
    },
    {
      id: 2,
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
      tags: ['.NET Core', 'Onion Architecture', 'CQRS / MediatR', 'JWT Auth', 'Serilog', 'SQL Server'],
      icon: '🛡️'
    },
    {
      id: 3,
      titleKey: 'projects.project3.title',
      descriptionKey: 'projects.project3.description',
      tags: ['Angular', 'RxJS', 'ASP.NET Core', 'SignalR', 'Bootstrap', 'Responsive'],
      icon: '🍔'
    },
    {
      id: 4,
      titleKey: 'projects.project4.title',
      descriptionKey: 'projects.project4.description',
      tags: ['Angular', 'Angular Material', 'ASP.NET Core API', 'SQL Server'],
      icon: '🏥'
    },
    {
      id: 5,
      titleKey: 'projects.project5.title',
      descriptionKey: 'projects.project5.description',
      tags: ['Angular', 'TypeScript', 'Reactive Forms', 'Bootstrap', 'CSS3'],
      icon: '🛒'
    }
  ];

  ngAfterViewInit(): void {
    this.animationService.refreshAOS();
  }
}