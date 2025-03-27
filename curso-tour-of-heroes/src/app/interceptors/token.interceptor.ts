import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class tokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    if (!token) {
      token = this.generateToken();
      localStorage.setItem('token', token);
    }

    req = req.clone({
      setHeaders: {
        Authorization: token,
      },
    });

    return next.handle(req);
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2, 12);
  }
}
