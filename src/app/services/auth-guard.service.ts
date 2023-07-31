import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private readonly _auth = inject(AuthService);
  private readonly _router= inject(Router)

  canActivate() {
    const isAuthenticated: boolean = this._auth.isAuthUser();
    if (isAuthenticated) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
