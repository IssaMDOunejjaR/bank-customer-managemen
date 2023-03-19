import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { StatCardComponent } from './stat-card/stat-card.component';

@NgModule({
  declarations: [InputComponent, RadioComponent, StatCardComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, StatCardComponent],
})
export class UtilsModule {}
