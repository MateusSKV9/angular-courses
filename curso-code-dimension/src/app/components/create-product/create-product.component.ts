import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private snackSevice: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const formValue = this.form.value;

    const product: Product = {
      title: formValue.title,
    };

    this.productService.createProduct(product).subscribe({
      next: (res) => {
        this.snackSevice.open('Produto adicionado! ✅', 'Ok');
        this.router.navigate(['/']);
      },
      error: (err) => console.log('Erro: ', err),
    });
  }
}
