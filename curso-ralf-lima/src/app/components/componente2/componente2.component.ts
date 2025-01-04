import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  message: boolean = false;
  value: string = '';
  valueSaveD: string = '';
  typingText: string = '';

  showMessage() {
    this.message = !this.message;
  }

  saveMessage(name: string) {
    this.valueSaveD = name;
  }
}
