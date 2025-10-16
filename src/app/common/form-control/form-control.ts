import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.html',
  styleUrl: './form-control.scss',
})
export class FormResumeControl {
  readonly name = input.required<string>();
  readonly control = input.required<FormControl>();
  readonly rows = input<number>();

  id = `form-control-${Math.random().toString(36).substring(2, 15)}`;
}
