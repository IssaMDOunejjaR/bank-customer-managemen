import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
})
export class StatCardComponent {
  @Input() imgUrl = '';
  @Input() value: string | null = '';
  @Input() title = '';
}
