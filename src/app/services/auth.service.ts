import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = true;

  public login():void{
    this._isAuthenticated = true;
  }

  public logout():void{
    this._isAuthenticated = false;
  }

  public isAuthUser(): boolean {
    return this._isAuthenticated;
  }
}
