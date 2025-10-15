import { Component, effect, inject } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeInstance } from '../resume/resume.model';
import { ResumeStore } from '../services/resume.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { WorkExperience } from '../resume/resume-work-experience-section/work-experience.model';
import { Education } from '../resume/resume-education-section/education.model';

@Component({
  selector: 'app-edit-resume',
  imports: [ReactiveFormsModule, CreateWorkExperience, CreateEducation],
  templateUrl: './edit-resume.html',
  styleUrl: './edit-resume.scss',
})
export class EditResume {
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  createResumeService = inject(CreateResumeService);
  resumeStore = inject(ResumeStore);

  activatedRoute = inject(ActivatedRoute);
  resumeId = this.activatedRoute.snapshot?.params['resumeId'];

  existingResumeForm = toSignal(this.resumeStore.getResumeForm(this.resumeId));

  resumeForm = this.buildResumeForm();

  buildWorkExperiencesFormGroup(): FormArray {
    return this.formBuilder.array([
      new FormGroup({
        title: new FormControl('', [Validators.required]),
        dateRange: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        notes: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    ]);
  }

  buildEducationsFormGroup(): FormArray {
    return this.formBuilder.array([
      new FormGroup({
        institution: new FormControl('', [Validators.required]),
        dateRange: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
        notes: this.formBuilder.array([
          new FormControl('', [Validators.required]),
        ]),
      }),
    ]);
  }

  buildResumeForm(): FormGroup {
    return new FormGroup({
      resumeId: new FormControl(this.resumeId),
      objective: new FormControl('', [Validators.required]),
      workExperiences: this.buildWorkExperiencesFormGroup(),
      educations: this.buildEducationsFormGroup(),
    });
  }

  constructor() {
    effect(() => {
      if (
        this.existingResumeForm() &&
        this.existingResumeForm()?.educations &&
        this.existingResumeForm()?.workExperiences &&
        this.existingResumeForm()?.objective
      ) {
        this.setObjective();
        this.setWorkExperience();
        this.setEducation();
      }
    });
  }

  setObjective(): void {
    this.resumeForm.setControl(
      'objective',
      new FormControl(this.existingResumeForm()?.objective, [
        Validators.required,
      ]),
    );
  }

  setWorkExperience(): void {
    this.workExperiences.clear();

    this.existingResumeForm()?.workExperiences.forEach((we) => {
      this.workExperiences.push(
        new FormGroup({
          title: new FormControl(we.title, [Validators.required]),
          dateRange: new FormControl(we.dateRange, [Validators.required]),
          companyName: new FormControl(we.companyName, [Validators.required]),
          notes: this.formBuilder.array(
            we.notes.map((n) => new FormControl(n, [Validators.required])),
          ),
        }),
      );
    });
  }

  setEducation(): void {
    this.educations.clear();

    this.existingResumeForm()?.educations.forEach((we) => {
      this.educations.push(
        new FormGroup({
          institution: new FormControl(we.institution, [Validators.required]),
          dateRange: new FormControl(we.dateRange, [Validators.required]),
          location: new FormControl(we.location, [Validators.required]),
          notes: this.formBuilder.array(
            we.notes.map((n) => new FormControl(n, [Validators.required])),
          ),
        }),
      );
    });
  }

  get workExperiences(): FormArray {
    return this.resumeForm.get('workExperiences') as FormArray;
  }

  get educations(): FormArray {
    return this.resumeForm.get('educations') as FormArray;
  }

  async saveResume() {
    await this.createResume();
  }

  async saveAndExit() {
    await this.createResume();
    this.router.navigate([this.resumeId]);
  }

  async createResume() {
    this.resumeForm.markAllAsDirty();

    if (this.resumeForm.invalid) {
      console.error('form is invalid', this.resumeForm);
    }

    if (this.resumeForm.valid) {
      await this.createResumeService.createOrUpdate({
        ...this.resumeForm.value,
        resumeId: this.resumeId,
      } as ResumeInstance);
    }
  }
}
