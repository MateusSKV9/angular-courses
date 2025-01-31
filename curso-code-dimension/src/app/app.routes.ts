import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./components/create-product/create-product.component').then(
        (m) => m.CreateProductComponent
      ),
  },
  {
    path: 'edit-product/:id',
    loadComponent: () =>
      import('./components/edit-product/edit-product.component').then(
        (m) => m.EditProductComponent
      ),
  },
];
