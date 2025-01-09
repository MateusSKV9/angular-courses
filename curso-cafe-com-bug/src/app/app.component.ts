import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from './components/base-ui/base-ui.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    BaseUiComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'curso-cafe-com-bug';
  exibeHome: boolean = true;

  ngOnInit(): void {
    this.getUser();
  }

  constructor(private userService: UserService) {}

  getUser() {
    const user = localStorage.getItem('user')!;
    this.userService.setUser(JSON.parse(user));
  }

  destruir() {
    this.exibeHome = false;
  }
}
