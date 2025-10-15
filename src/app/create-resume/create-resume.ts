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
import { CreateEducation } from './create-education/create-education';
import { CreateResumeService } from './create-resume.service';
import { ActivatedRoute } from '@angular/router';
import { ResumeInstance } from '../resume/resume.model';

@Component({
  selector: 'app-create-resume',
  imports: [ReactiveFormsModule, CreateWorkExperience, CreateEducation],
  templateUrl: './create-resume.html',
  styleUrl: './create-resume.scss',
})
export class CreateResume {
  formBuilder = inject(FormBuilder);

  createResumeService = inject(CreateResumeService);

  resumeId = inject(ActivatedRoute).snapshot?.data['resumeId'];

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
        notes: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    ]),
    educations: this.formBuilder.array([
      new FormGroup({
        institution: new FormControl('', [Validators.required]),
        dateRange: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
        notes: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    ]),
  });

  get workExperiences(): FormArray {
    return this.resumeForm.get('workExperiences') as FormArray;
  }

  get educations(): FormArray {
    return this.resumeForm.get('educations') as FormArray;
  }

  createResume() {
    this.resumeForm.markAllAsDirty();

    if (this.resumeForm.valid) {
      console.log(this.resumeForm.value);
      this.createResumeService.createResume({
        ...this.resumeForm.value,
        resumeId: this.resumeId,
      } as ResumeInstance);
    }
  }
}
