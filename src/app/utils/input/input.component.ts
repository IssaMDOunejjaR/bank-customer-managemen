import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() name = '';
  @Input() type = '';
  @Input() placeholder = '';
  @Input() value: string = '';
  @Input() error: string | null = null;

  formGroup!: FormGroup;

  constructor(private parentFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.formGroup = this.parentFormGroup.control;
  }
}
