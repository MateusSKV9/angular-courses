import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/Hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/Dialog.interface';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatIcon,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  host: { class: 'class1' },
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  constructor(private heroService: HeroService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      content: `Delete ${hero.name}?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService
          .delete(hero)
          .subscribe(
            () => (this.heroes = this.heroes?.filter((h) => h !== hero))
          );
      }
    });
  }
}
