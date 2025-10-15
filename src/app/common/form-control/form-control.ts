import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.html',
  styleUrl: './form-control.scss',
})
export class FormResumeControl {
  name = input.required<string>();
  control = input.required<FormControl>();
}
