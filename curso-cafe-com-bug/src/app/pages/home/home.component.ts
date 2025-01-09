import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserService } from '../../services/user.service';
import { UsersComponent } from '../../components/users/users.component';
import { UserGit } from '../../interfaces/UserGit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userGit!: UserGit;

  ngOnInit(): void {
    this.getGitUser();
  }

  constructor(private userService: UserService) {}

  getGitUser() {
    this.userService.getGitUser('MateusSKV9').subscribe((response: UserGit) => {
      this.userGit = response;
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
