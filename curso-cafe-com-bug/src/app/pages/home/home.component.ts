import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements DoCheck {
  // ngOnDestroy(): void {
  //   alert('Destruiu');
  // }

  num: number = 0;

  ngDoCheck(): void {
    console.log('Mudou');
  }

  adiciona1() {
    this.num++;
  }
}
