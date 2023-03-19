import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
})
export class NavbarLinkComponent {
  @Input() title = '';
  @Input() imgUrl = '';
  @Input() isExpanded = true;
  @Input() routerLink = '';
}
