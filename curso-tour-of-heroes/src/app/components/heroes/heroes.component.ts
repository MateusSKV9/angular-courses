import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatTableModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  host: { class: 'class1' },
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
