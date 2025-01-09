import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserService } from '../../services/user.service';
import { UsersComponent } from '../../components/users/users.component';
import { UserGit } from '../../interfaces/UserGit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userGit!: UserGit | undefined;
  username: string = '';

  constructor(private userService: UserService) {}

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe({
      next: (response: UserGit) => {
        this.userGit = response;
      },
      error: (error) => {
        this.userGit = undefined;
        alert(error.error.message)
      }
    });
  }

  // ngOnDestroy(): void {
  //   alert('Destruiu');
  // }

  // checked: boolean = false;
  // num: number = 0;

  // ngDoCheck(): void {
  //   console.log('Mudou');
  // }

  // adiciona1() {
  //   this.num++;

  //   this.checked = false;
  // }

  // remover1() {
  //   if (this.num == 0) {
  //     this.checked = true;
  //     return;
  //   }

  //   this.num--;
  // }
}
