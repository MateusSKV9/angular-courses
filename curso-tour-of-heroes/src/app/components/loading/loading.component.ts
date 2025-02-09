import { Component } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoadingService } from '../../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  loading$;
  firstLoadMessage$;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
    this.firstLoadMessage$ = this.loadingService.firstLoadMessage$;
  }
}
