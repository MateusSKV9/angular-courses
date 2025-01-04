import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Componente03Component } from '../componente03/componente03.component';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [CommonModule, FormsModule, Componente03Component],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css',
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
