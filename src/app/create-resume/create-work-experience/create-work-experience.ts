import { Component, inject, input } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateExperience } from '../create-experience/create-experience';
import { FormArrayCard } from '../../common/form-array-card/form-array-card';
import { FormArraySection } from '../../common/form-array-section/form-array-section';
import { FormResumeControl } from '../../common/form-control/form-control';

@Component({
  selector: 'app-create-work-experience',
  imports: [
    ReactiveFormsModule,
    FormArrayCard,
    FormArraySection,
    FormResumeControl,
    CreateExperience,
  ],
  templateUrl: './create-work-experience.html',
  styleUrl: './create-work-experience.scss',
})
export class CreateWorkExperience {
  workExperiences = input.required<FormArray>();
  formBuilder = inject(FormBuilder);

  experiences(i: number): FormArray {
    return this.workExperiences().at(i).get('experiences') as FormArray;
  }

  titleControl(i: number): FormControl {
    return this.workExperiences().at(i).get('title') as FormControl;
  }

  dateRangeControl(i: number): FormControl {
    return this.workExperiences().at(i).get('dateRange') as FormControl;
  }

  companyNameControl(i: number): FormControl {
    return this.workExperiences().at(i).get('companyName') as FormControl;
  }

  addWorkExperience() {
    this.workExperiences().push(
      new FormGroup({
        title: new FormControl('', [Validators.required]),
        dateRange: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        experiences: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    );
  }

  removeWorkExperience(index: number) {
    this.workExperiences().removeAt(index);
  }
}
