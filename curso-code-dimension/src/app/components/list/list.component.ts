import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsservice: ProductsService) {}

  ngOnInit(): void {
    this.productsservice.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
