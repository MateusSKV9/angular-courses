import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'heroes',
    loadComponent: () =>
      import('./components/heroes/heroes.component').then(
        (m) => m.HeroesComponent
      ),
  },
  {
    path: 'heroes/:id',
    loadComponent: () =>
      import('./components/hero-datail/hero-datail.component').then(
        (m) => m.HeroDatailComponent
      ),
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];
