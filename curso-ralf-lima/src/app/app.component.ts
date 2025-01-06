import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContainerComponentsComponent } from './components/container-components/container-components.component';
// import 'bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ContainerComponentsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-ralf-lima';
}
