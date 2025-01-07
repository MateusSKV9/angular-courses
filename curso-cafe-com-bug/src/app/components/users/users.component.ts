import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userSelecionado!: User;

  users: User[] = [
    { nome: 'Mateus', idade: 20 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Victor', idade: 23 },
    { nome: 'Larissa', idade: 20 },
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}
