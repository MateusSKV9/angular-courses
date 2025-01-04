import { Component } from '@angular/core';
import { Componente01Component } from './components/componente01/componente01.component';
import { Componente2Component } from './components/componente02/componente02.component';
import { Componente03Component } from './components/componente03/componente03.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Componente01Component, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-ralf-lima';
}
