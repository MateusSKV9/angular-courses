import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Person } from '../../interfaces/Person';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css',
})
export class Componente11Component implements OnInit {
  form!: FormGroup;
  btnRegister: boolean = true;
  persons: Person[] = [];

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(120),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  get name() {
    return this.form.get('name')!;
  }

  get age() {
    return this.form.get('age')!;
  }

  get city() {
    return this.form.get('city')!;
  }

  register() {
    this.persons.push(this.form.value as Person);
    this.form.reset();
  }
}
