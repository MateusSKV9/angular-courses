import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages = new BehaviorSubject<string[]>([]);
  messages$ = this.messages.asObservable(); 

  addMessage(message: string): void {
    this.messages.next([...this.messages.value, message]); 
  }

  clearMessage(): void {
    this.messages.next([]);
  }
}
