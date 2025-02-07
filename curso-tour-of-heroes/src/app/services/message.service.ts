import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages = new BehaviorSubject<string[]>([]);
  messages$ = this.messages.asObservable(); // Expondo como Observable

  addMessage(message: string): void {
    this.messages.next([...this.messages.value, message]); // Atualiza array
  }

  clearMessage(): void {
    this.messages.next([]); // Emite um novo array vazio
  }
}
