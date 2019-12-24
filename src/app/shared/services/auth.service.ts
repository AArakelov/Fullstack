import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/v1/register', user);
  }

  login(user: User): Observable<any> {

    return this.http.post<any>('/api/v1/login', user)
      .pipe(
        tap(
          ({data} ) => {
            localStorage.setItem('token', data.token);
            this.setToken(data.token);
          }
        )
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
   // this.setToken(null);
    localStorage.clear();
    console.log(this.token)
  }
}
