import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserService } from '../../services/user.service';
import { UsersComponent } from '../../components/users/users.component';
import { UserGit } from '../../interfaces/UserGit';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  getGitUser() {
    this.spinner.show();

    this.userService.getGitUser(this.username).subscribe({
      next: (response: UserGit) => {
        this.spinner.hide();
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
        this.spinner.hide();
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
