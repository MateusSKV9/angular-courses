import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../interfaces/User';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCardComponent, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  userSelecionado!: User;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      idade: [
        '',
        [Validators.required, Validators.min(18), Validators.max(120)],
      ],
    });
  }

  users: User[] = [
    { nome: 'Mateus', idade: 20 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Victor', idade: 23 },
    { nome: 'Larissa', idade: 20 },
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
