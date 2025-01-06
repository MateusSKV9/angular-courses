import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente10',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css',
})
export class Componente10Component implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      city: new FormControl(''),
    });
  }
}
