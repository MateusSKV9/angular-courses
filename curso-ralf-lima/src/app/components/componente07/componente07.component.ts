import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Estudent } from '../../Estudent';
import { EstudentsService } from '../../services/estudents.service';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css',
})
export class Componente07Component implements OnInit {
  on: boolean = false;
  AllEstudents!: Estudent[];
  estudents!: Estudent[];
  searchTerm: string = '';

  list: string[] = ['Aprovado', 'Aprovado', 'Reprovado', 'Aprovado'];

  constructor(private estudentService: EstudentsService) {}

  ngOnInit(): void {
    this.getAllEstudents();
  }

  getAllEstudents(): void {
    this.estudentService.getAll().subscribe((estudents) => {
      this.AllEstudents = estudents;
      this.estudents = estudents;
    });
  }

  search(search: string): void {
    const value = search.toLowerCase();

    this.estudents = this.AllEstudents.filter((estudent) => {
      return estudent.name && estudent.name.toLowerCase().includes(value);
    });
  }

  onMouseOver() {
    this.on = !this.on;
  }
}
