import { Component, input } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateEducationNotes } from './create-education-notes/create-education-notes';

@Component({
  selector: 'app-create-education',
  imports: [ReactiveFormsModule, CreateEducationNotes],
  templateUrl: './create-education.html',
  styleUrl: './create-education.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormArrayName }],
})
export class CreateEducation {
  educations = input.required<FormArray>();

  institutionControl(i: number): FormControl {
    return this.educations().at(i).get('institution') as FormControl;
  }

  dateRangeControl(i: number): FormControl {
    return this.educations().at(i).get('dateRange') as FormControl;
  }

  locationControl(i: number): FormControl {
    return this.educations().at(i).get('location') as FormControl;
  }

  notesArray(i: number): FormArray {
    return this.educations().at(i).get('notes') as FormArray;
  }

  addEducation(): void {
    this.educations().push(
      new FormGroup({
        institution: new FormControl('', Validators.required),
        dateRange: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        notes: new FormArray([new FormControl('', Validators.required)]),
      }),
    );
  }
}
