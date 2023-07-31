import { Component, inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  public navLinks: string[] = ['home', 'career'];
  public isVisibleMenu = false;

  private _auth = inject(AuthService)

  public toggleMenu(): void{
    this.isVisibleMenu = !this.isVisibleMenu
  }

  public login(): void {
    this._auth.login();
    this.toggleMenu();
  }
}
