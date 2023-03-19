import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  templateUrl: './image-placeholder.component.html',
})
export class ImagePlaceholderComponent {
  @Input() value: string = '';
}
