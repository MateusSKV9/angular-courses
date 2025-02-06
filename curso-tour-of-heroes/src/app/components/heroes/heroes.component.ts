import { Component } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  host: { class: 'class1' },
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes = HEROES;

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
