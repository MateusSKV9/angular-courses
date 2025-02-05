import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserGit } from '../../interfaces/UserGit';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  show: boolean = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe({
      next: (response: UserGit) => {
        this.toastr.success('Usuário encontrado', 'Sucesso', {
          timeOut: 1500,
        });
        this.userGit = response;
        this.show = false;
      },
      error: (error) => {
        this.userGit = undefined;
        this.toastr.error(error.error.message, 'Erro', {
          timeOut: 1500,
        });
        this.show = true;
      },
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
