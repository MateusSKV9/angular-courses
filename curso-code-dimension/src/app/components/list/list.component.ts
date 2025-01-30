import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(private productsservice: ProductsService) {}

  ngOnInit(): void {
    this.productsservice.getAllProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  onProductDeleted(productId: string) {
    this.products.update((products) =>
      products.filter((p) => p.id !== productId)
    );
  }
}
