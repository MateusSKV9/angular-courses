import { Injectable } from '@angular/core';
import { Estudent } from '../Estudent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudentsService {
  private apiUrl = 'http://localhost:3000/estudents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Estudent[]> {
    return this.http.get<Estudent[]>(this.apiUrl);
  }

  // getEstudent(): Observable<Estudent[]> {

  // }
}
