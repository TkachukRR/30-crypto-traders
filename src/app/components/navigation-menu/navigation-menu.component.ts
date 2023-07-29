import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  public navLinks: string[] = ['home', 'career'];
  public isVisibleMenu = true;

  public toggleMenu(): void{
    this.isVisibleMenu = !this.isVisibleMenu
  }
}
