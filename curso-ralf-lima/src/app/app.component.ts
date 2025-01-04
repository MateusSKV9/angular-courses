import { Component } from '@angular/core';
import { Componente01Component } from './components/componente01/componente01.component';
import { Componente2Component } from './components/componente02/componente02.component';
import { Componente04Component } from "./components/componente04/componente04.component";
import { Componente05Component } from "./components/componente05/componente05.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Componente01Component, Componente2Component, Componente04Component, Componente05Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-ralf-lima';
}
