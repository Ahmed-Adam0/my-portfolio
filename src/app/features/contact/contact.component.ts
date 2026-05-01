import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  successMessage = false;

  submitForm(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      this.successMessage = true;
      // هنا يمكن إضافة منطق الإرسال للـ API
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  }

  resetForm(): void {
    this.formData = { name: '', email: '', message: '' };
    this.submitted = false;
    this.successMessage = false;
  }

}