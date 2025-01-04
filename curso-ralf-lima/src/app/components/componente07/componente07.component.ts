import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css',
})
export class Componente07Component {
  on: boolean = false;

  onMouseOver() {
    this.on = !this.on;
  }
}
