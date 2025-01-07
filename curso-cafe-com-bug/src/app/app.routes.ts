import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'users/:username', component: UserComponent },
];
