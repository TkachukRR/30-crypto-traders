import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ScreenWidthService } from "../../services/screen-width.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  private _auth = inject(AuthService)
  private _router = inject(Router)
  private _screenWidth = inject(ScreenWidthService)
  public isLaptopScreen = false;

  public login(): void{
    this._auth.login()
    this._router.navigate(['/general'])
  }

  public ngOnInit(): void {
    this._screenWidth.getScreenWidth().subscribe((width) => {
      if (width > 375) {
        this.isLaptopScreen = true;
      } else {
        this.isLaptopScreen = false;
      }
    });
  }
}
