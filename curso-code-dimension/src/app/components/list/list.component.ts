import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../services/confirmation-dialog.service';
import { NoItemsComponent } from "../no-items/no-items.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(
    private productsservice: ProductsService,
    private dialogService: ConfirmationDialogService
  ) {}

  ngOnInit(): void {
    this.productsservice.getAllProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  onProductDeleted(product: Product) {
    this.dialogService
      .openDialog()
      .pipe(filter((asnwer) => asnwer == true))
      .subscribe(() => {
        this.productsservice.deleteProduct(product.id!).subscribe(() => {
          this.products.update((products) =>
            products.filter((p) => p !== product)
          );
        });
      });
  }
}
