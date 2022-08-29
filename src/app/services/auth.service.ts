import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://apolis-grocery.herokuapp.com/api/auth/'

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}login`, data);
  }

  checkToken(): boolean {
    if (localStorage.getItem('token'))
      return true;
    else
      return false;
  }
}
