import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  @Input() name = '';
  @Input() values: string[] = [];
  @Input() formValue = '';

  formGroup!: FormGroup;

  constructor(private parentFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.formGroup = this.parentFormGroup.control;
  }
}
