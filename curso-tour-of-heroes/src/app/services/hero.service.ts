import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Hero.interface';
import { Observable, tap } from 'rxjs';
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
      .get<Hero>(this.getUrl(id))
      .pipe(tap((hero) => this.log(`Fetched ${this.descAttributes(hero)}`)));
  }

  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(`${this.apiUrl}`, hero)
      .pipe(tap(() => this.log(`Created ${this.descAttributes(hero)}`)));
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(tap((hero) => this.log(`Updated ${this.descAttributes(hero)}`)));
  }

  delete(hero: Hero): Observable<Hero> {
    return this.http
      .delete<Hero>(this.getUrl(hero.id))
      .pipe(tap(() => this.log(`Deleted ${this.descAttributes(hero)}`)));
  }

  private log(message: string) {
    this.messageService.addMessage(`HeroService ${message}`);
  }

  private descAttributes(hero: Hero) {
    return `hero id=${hero.id} and name ${hero.name}`;
  }

  private getUrl(id: number): string {
    return `${this.apiUrl}/${id}`;
  }
}
