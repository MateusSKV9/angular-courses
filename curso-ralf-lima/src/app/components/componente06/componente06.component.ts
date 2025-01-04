import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css',
})
export class Componente06Component {
  item: string = '';
}
