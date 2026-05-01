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
      title: 'منصة حجوزات طبية',
      description: 'منصة متكاملة لحجز المواعيد الطبية مع لوحة تحكم للأطباء والمرضى، وإشعارات فورية.',
      tags: ['Angular', '.NET Core', 'SQL Server', 'Bootstrap'],
      icon: '🏥'
    },
    {
      id: 2,
      title: 'بورتوفوليو احترافي',
      description: 'موقع شخصي حديث مع دعم الثيم الداكن/الفاتح، الترجمة الفورية (عربي/إنجليزي)، وتأثيرات حركية متقدمة.',
      tags: ['Angular', 'GSAP', 'TypeScript', 'RTL'],
      icon: '🎨'
    },
    {
      id: 3,
      title: 'نظام إدارة المهام',
      description: 'تطبيق لإدارة المشاريع والمهام مع خاصية السحب والإفلات، والإشعارات اللحظية باستخدام SignalR.',
      tags: ['Angular', 'RxJS', 'SignalR', 'Tailwind'],
      icon: '📋'
    },
    {
      id: 4,
      title: 'متجر إلكتروني',
      description: 'منصة تجارة إلكترونية متكاملة مع سلة مشتريات، بوابات دفع متعددة، ونظام توصيل.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒'
    }
  ];

  ngAfterViewInit(): void {
    this.animationService.refreshAOS();
  }
}