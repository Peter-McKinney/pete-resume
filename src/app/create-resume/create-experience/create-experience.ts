import { Component, input } from '@angular/core';
import {
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormArraySection } from '../../common/form-array-section/form-array-section';
import { FormArrayCard } from '../../common/form-array-card/form-array-card';
import { FormResumeControl } from '../../common/form-control/form-control';
import { FormArraySubSection } from '../../common/form-array-sub-section/form-array-sub-section';

@Component({
  selector: 'app-create-experience',
  imports: [
    ReactiveFormsModule,
    FormArraySection,
    FormArrayCard,
    FormResumeControl,
    FormArraySubSection,
  ],
  templateUrl: './create-experience.html',
  styleUrl: './create-experience.scss',
})
export class CreateExperience {
  experiences = input.required<FormArray<FormControl>>();

  addExperience() {
    this.experiences().push(new FormControl('', [Validators.required]));
  }

  removeExperience(index: number) {
    this.experiences().removeAt(index);
  }
}
