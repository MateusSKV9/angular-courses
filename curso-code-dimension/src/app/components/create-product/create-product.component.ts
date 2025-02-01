import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../../shared/form/form.component';
import { BackToListComponent } from "../../shared/back-to-list/back-to-list.component";

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, FormComponent, RouterModule, BackToListComponent],
  standalone: true,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private snackSevice: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    this.productService.createProduct(product).subscribe({
      next: () => {
        this.snackSevice.open('Produto adicionado! ✅', 'Ok');
        this.router.navigate(['/']);
      },
      error: (err) => console.log('Erro: ', err),
    });
  }
}
