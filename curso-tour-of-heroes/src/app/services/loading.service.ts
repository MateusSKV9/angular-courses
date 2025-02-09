import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private isFirstLoad = true;
  private firstLoadMessageSubject = new BehaviorSubject<boolean>(false);
  firstLoadMessage$ = this.firstLoadMessageSubject.asObservable();

  show(): void {
    this.loadingSubject.next(true);

    if (this.isFirstLoad) {
      this.firstLoadMessageSubject.next(true);
    }
  }

  hide(): void {
    this.loadingSubject.next(false);

    if (this.isFirstLoad) {
      this.isFirstLoad = false;
      this.firstLoadMessageSubject.next(false);
    }
  }
}
