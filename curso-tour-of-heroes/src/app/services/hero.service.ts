import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Hero.interface';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((c) => (c.id === id))!;

    this.messageService.addMessage(`HeroService: fetched hero ${id}`);
    return of(hero);
  }
}
