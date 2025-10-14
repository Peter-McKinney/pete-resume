import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateWorkExperience } from './create-work-experience/create-work-experience';

@Component({
  selector: 'app-create-resume',
  imports: [ReactiveFormsModule, CreateWorkExperience],
  templateUrl: './create-resume.html',
  styleUrl: './create-resume.scss',
})
export class CreateResume {
  formBuilder = inject(FormBuilder);

  resumeForm = new FormGroup({
    objective: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    workExperiences: this.formBuilder.array([
      new FormGroup({
        title: new FormControl('', [Validators.required]),
        dateRange: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        experiences: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    ]),
  });

  get workExperiences(): FormArray {
    return this.resumeForm.get('workExperiences') as FormArray;
  }

  createResume() {
    this.resumeForm.markAllAsDirty();

    console.log(this.resumeForm.value);
  }
}
