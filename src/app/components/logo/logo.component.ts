import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() showMiniLogo = false;
  @Input() showBackground = false;
  @Input() logoTextSize: 'xs'|'s'|'m'|'l' = 's';
}
