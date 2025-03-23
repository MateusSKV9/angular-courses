import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-hero-datail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './hero-datail.component.html',
  styleUrl: './hero-datail.component.scss',
  host: { class: 'class1' },
})
export class HeroDatailComponent implements OnInit {
  hero!: Hero;
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.activateRoute.snapshot.paramMap.get('id');

    if (paramId === 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as Hero;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((hero) => (this.hero = hero));
    }
  }

  goBack(): void {
    this.router.navigate(['/heroes']);
  }

  create(): void {
    this.heroService.create(this.hero).subscribe(() => {
      this.goBack();
    });
  }

  update(): void {
    this.heroService.update(this.hero).subscribe(() => {
      this.goBack();
    });
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }
}
