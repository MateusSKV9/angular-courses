import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) product!: Product;
}
