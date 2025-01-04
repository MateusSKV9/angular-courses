import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css',
})
export class Componente01Component {
  name: string = 'Mateus Santos';
  age: number = 20;
  role: string = 'web developer';
  address = {
    city: 'Jequié',
    estate: 'Bahia',
  };
}
