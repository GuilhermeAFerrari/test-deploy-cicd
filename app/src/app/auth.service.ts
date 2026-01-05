import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _isLoggedIn = signal(false);
  public readonly isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Lógica de autenticação mockada
    if (username === 'user' && password === 'user') {
      this._isLoggedIn.set(true);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
