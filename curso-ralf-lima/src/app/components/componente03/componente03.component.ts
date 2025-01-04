import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css',
})
export class Componente03Component {
  imageUrl: string = '/assets/day.jpg';

  changeImage() {
    if (this.imageUrl === '/assets/day.jpg') this.imageUrl = '/assets/night.jpg';
    else this.imageUrl = '/assets/day.jpg';
  }
}
