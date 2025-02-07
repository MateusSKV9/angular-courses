import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';
import { HeroDatailComponent } from '../hero-datail/hero-datail.component';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDatailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  host: { class: 'class1' },
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];
  selectedHero!: Hero;

  constructor(
    private heroService: HeroService,
    private messaseService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messaseService.addMessage(
      `HeroesComponent: Selected hero: ${hero.id} - ${hero.name}`
    );
  }
}
