import { Component } from '@angular/core';
// import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrls: ['./componente08.component.css', ],
})
export class Componente08Component {
  media: number = 9;
  names: string[] = ['Mateus', 'Julia', 'Beto', 'Ana'];
  language: string = 'JS';
}
