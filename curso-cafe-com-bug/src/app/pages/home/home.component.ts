import { Component } from '@angular/core';
import { ExemploComponentComponent } from "../../components/exemplo-component/exemplo-component.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExemploComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
