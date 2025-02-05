import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  form!: FormGroup;
  id: string = '';

  @Input() product!: Product;
  @Output() done: EventEmitter<Product> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const forEdit = this.route.snapshot.data['forEdit'];

    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });

    if (forEdit) {
      this.id = this.route.snapshot.paramMap.get('id')!;

      this.productService.getProduct(this.id).subscribe((product) => {
        this.product = product;

        this.form.setValue({
          name: this.product!.name,
        });
      });
    }
  }

  onSubmit() {
    const formValue = this.form.value;
    const product: Product = {
      name: formValue.name,
    };

    this.done.emit(product);
  }
}
