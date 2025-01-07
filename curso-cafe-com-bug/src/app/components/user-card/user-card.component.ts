import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() userInfoEmitter = new EventEmitter<User>();

  retornarDados() {
    this.userInfoEmitter.emit(this.user);
  }
}
