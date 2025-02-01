import { Component, input, output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  product = input.required<Product>();
  productDeleted = output();

  constructor(private productService: ProductsService) {}

  deleteProduct() {
    this.productDeleted.emit();
  }
}
