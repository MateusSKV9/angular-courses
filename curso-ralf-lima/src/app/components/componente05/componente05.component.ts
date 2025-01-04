import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css',
})
export class Componente05Component {
  names: string[] = ['Mateus', 'Beatriz', 'Denis', 'Paula'];

  languages = [
    {
      name: 'Hyper Text Markup Language',
      sigla: 'HTML',
      type: 'Linguagem de Marcação',
    },
    {
      sigla: 'CSS',
      name: 'Cascating Style Sheet',
      type: 'Linguagem de estilização',
    },
    {
      name: 'JavaScript',
      type: 'Linguagem de programação',
      sigla: 'JS',
    },
    {
      sigla: 'PhP',
      name: 'PhP',
      type: 'Linguagem de programaço',
    },
  ];
}
