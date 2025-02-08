import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Hero.interface';
import { HEROES } from '../mock-heroes';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  baseUrl = environment.baseUrl;
  apiUrl = `${this.baseUrl}/heroes`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.apiUrl}`)
      .pipe(tap((heroes) => this.log(`Fetched ${heroes.length} hero(es)`)));
  }

  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.apiUrl}/${id}`)
      .pipe(
        tap((hero) =>
          this.log(`Fetched hero id ${hero.id} and name ${hero.name}`)
        )
      );
  }

  private log(message: string) {
    this.messageService.addMessage(`HeroService ${message}`);
  }
}
