import { Component, inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private _auth = inject(AuthService)
  private _router = inject(Router)

  public login(): void{
    this._auth.login()
    this._router.navigate(['/general'])
  }
}
