import { Component } from '@angular/core';

interface Address {
  info:string;
  email:string;
  location:string;
  phone:string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public footer__address: Address = {
    info:'Billing & General Support',
    email:'hello@xtrades.net',
    location:'Los Angeles, CA 90028',
    phone:'1-530-723-5499'
  }
  protected readonly location = location;
}
