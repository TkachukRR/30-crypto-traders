import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-info',
  templateUrl: './sub-info.component.html',
  styleUrls: ['./sub-info.component.scss']
})
export class SubInfoComponent {
  public links: string[] = ['Privacy Policy', 'Refund Policy', 'Terms & Conditions']
}
