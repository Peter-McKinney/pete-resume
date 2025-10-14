import { Component, input } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-experience',
  imports: [ReactiveFormsModule],
  templateUrl: './create-experience.html',
  styleUrl: './create-experience.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormArrayName }],
})
export class CreateExperience {
  experiences = input.required<FormArray>();

  addExperience() {
    this.experiences().push(new FormControl('', [Validators.required]));
  }
}
