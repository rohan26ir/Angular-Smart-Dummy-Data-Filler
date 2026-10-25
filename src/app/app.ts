import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/reusable/navbar.component';
import { MobileMenuComponent } from './components/reusable/mobile-menu.component';
import { FooterComponent } from './components/reusable/footer.component';
import { BackgroundVideoComponent } from './components/reusable/background-video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MobileMenuComponent,
    FooterComponent,
    BackgroundVideoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuOpen = signal(false);
}
