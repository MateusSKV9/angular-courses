import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar produto</h2>
    <mat-dialog-content>
      Tem certeza que quer deletar esse produto?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNo()">Não</button>
      <button mat-button color="accent" (click)="onYes()" cdkFocusInitial>
        Sim
      </button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);

  onNo() {
    this.dialogRef.close(false);
  }

  onYes() {
    this.dialogRef.close(true);
  }
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(
    private productsservice: ProductsService,
    private matDialog: MatDialog
  ) {}

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
