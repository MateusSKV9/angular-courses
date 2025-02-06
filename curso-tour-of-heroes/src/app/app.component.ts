import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-tour-of-heroes';
}
