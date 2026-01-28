import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CreateAccountCredentials, LoginCredentials } from '../models/auth.model';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private jwtService = inject(JwtService);

  login(credentials: LoginCredentials) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials);
  }

  register(credentials: CreateAccountCredentials) {
    return this.http.post(`${environment.apiUrl}/auth/register`, credentials);
  }

  isLoggedIn(): boolean {
    return !!this.jwtService.getToken();
  }

  logout() {
    this.jwtService.destroyToken();
  }
}
