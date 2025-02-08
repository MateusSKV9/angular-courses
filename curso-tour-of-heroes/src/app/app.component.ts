import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MessagesComponent } from './components/messages/messages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoadingComponent } from "./components/loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MessagesComponent,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    LoadingComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-tour-of-heroes';
}
