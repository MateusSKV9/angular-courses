import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Hero.interface';
import { HEROES } from '../mock-heroes';
import { delay, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  baseUrl = environment.baseUrl;
  apiUrl = `${this.baseUrl}`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.apiUrl}`)
      .pipe(tap((heroes) => this.log(`Fetched ${heroes.length} hero(es)`)));
  }

  getOne(id: number): Observable<Hero> {
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

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.apiUrl}/${hero.id}`, hero)
      .pipe(
        tap((hero) =>
          this.log(`Updated hero id=${hero.id} and name ${hero.name}`)
        )
      );
  }
}
