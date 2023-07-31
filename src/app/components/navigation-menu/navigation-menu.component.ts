import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ScreenWidthService } from "../../services/screen-width.service";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit{
  public navLinks: string[] = ['home', 'career'];
  public isVisibleMenu = false;
  private _screenWidth = inject(ScreenWidthService)
  public isLaptopScreen = false;

  private _auth = inject(AuthService)

  public toggleMenu(): void{
    this.isVisibleMenu = !this.isVisibleMenu
  }

  public login(): void {
    this._auth.login();
    this.toggleMenu();
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
