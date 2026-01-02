import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./features/hero/hero.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ContactComponent } from "./features/contact/contact.component";
//import { RegisterComponent } from "./features/auth/pages/register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent,  ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctor-appointment-web1';
}
