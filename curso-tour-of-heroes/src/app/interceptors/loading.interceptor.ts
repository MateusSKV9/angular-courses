import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  private activeResquests = 0;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeResquests === 0) {
      this.loadingService.show();
    }

    this.activeResquests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeResquests--;

        if (this.activeResquests === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
