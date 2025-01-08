import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements DoCheck {
  // ngOnDestroy(): void {
  //   alert('Destruiu');
  // }

  checked: boolean = false;
  num: number = 0;

  ngDoCheck(): void {
    console.log('Mudou');
  }

  adiciona1() {
    this.num++;

    this.checked = false;
  }

  remover1() {
    if (this.num == 0) {
      this.checked = true;
      return;
    }

    this.num--;
  }
}
