import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../interfaces/Product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  form!: FormGroup;
  id: string = '';
  product!: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private snackSevice: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(this.id).subscribe((product) => {
      this.product = product;

      this.form.setValue({
        title: this.product.title,
      });
    });
  }

  onSubmit() {
    const formValue = this.form.value;

    const product: Product = {
      title: formValue.title,
    };

    this.productService.editProduct(this.id, product).subscribe({
      next: () => {
        this.snackSevice.open('Produto editado! ✅', 'Ok');
        this.router.navigate(['/']);
      },
      error: (err) => console.log('Erro: ', err),
    });
  }
}
