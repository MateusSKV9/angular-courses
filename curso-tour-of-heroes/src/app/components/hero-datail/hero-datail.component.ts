import { Component, input } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-datail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-datail.component.html',
  styleUrl: './hero-datail.component.scss',
})
export class HeroDatailComponent {
  hero = input.required<Hero>();
}
