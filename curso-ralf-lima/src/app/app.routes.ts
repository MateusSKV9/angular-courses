import { Routes } from '@angular/router';
import { ContainerComponentsComponent } from './components/container-components/container-components.component';
import { Componente11Component } from './components/componente11/componente11.component';

export const routes: Routes = [
  { path: '', component: Componente11Component },
  { path: 'components', component: ContainerComponentsComponent },
];
