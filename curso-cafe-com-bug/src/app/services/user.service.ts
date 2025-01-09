import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../interfaces/UserGit';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGitUser(username: string) {
    return this.http.get<UserGit>(this.baseUrl + 'users/' + username).pipe(
      map((response: UserGit) => {
        return response;
      })
    );
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }
}
