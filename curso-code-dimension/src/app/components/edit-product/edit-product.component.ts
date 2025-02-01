import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/Product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormComponent } from '../../shared/form/form.component';
import { BackToListComponent } from "../../shared/back-to-list/back-to-list.component";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent, BackToListComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  id: string = '';

  constructor(
    private productService: ProductsService,
    private router: Router,
    private snackSevice: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  onSubmit(product: Product) {
    this.productService.editProduct(this.id, product).subscribe({
      next: () => {
        this.snackSevice.open('Produto editado! ✅', 'Ok');
        this.router.navigate(['/']);
      },
      error: (err) => console.log('Erro: ', err),
    });
  }
}
