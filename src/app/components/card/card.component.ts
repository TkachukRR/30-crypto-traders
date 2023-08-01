import { Component, Input } from '@angular/core';
import { Hiring } from "../general-page/general-page.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() itemInfo!: Hiring | null;
}
