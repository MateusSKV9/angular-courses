import { Component, input, output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  product = input.required<Product>();
  productDeleted = output<string>();

  constructor(private productService: ProductsService) {}

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: (res) => {
        console.log('Deletado', res);
        this.productDeleted.emit(id);
      },
      error: (err) => console.log('Error: ', err),
    });
  }
}
