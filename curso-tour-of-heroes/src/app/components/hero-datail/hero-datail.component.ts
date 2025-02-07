import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-datail',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './hero-datail.component.html',
  styleUrl: './hero-datail.component.scss',
})
export class HeroDatailComponent implements OnInit {
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
