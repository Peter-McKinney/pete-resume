import { inject, Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WorkExperience } from '../../resume/resume-work-experience-section/work-experience.model';
import { Education } from '../../resume/resume-education-section/education.model';
import { ResumeInstance } from '../../resume/resume.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formBuilder = inject(FormBuilder);

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

  buildResumeForm(resumeId: string): FormGroup {
    return new FormGroup({
      resumeId: new FormControl(resumeId),
      resumeName: new FormControl('', [Validators.required]),
      objective: new FormControl('', [Validators.required]),
      workExperiences: this.buildWorkExperiencesFormGroup(),
      educations: this.buildEducationsFormGroup(),
    });
  }

  setObjective(resumeForm: FormGroup, objective: string): void {
    resumeForm.setControl(
      'objective',
      new FormControl(objective, [Validators.required]),
    );
  }

  setWorkExperience(
    currentWorkExperiences: FormArray,
    newWorkExperiences: WorkExperience[],
  ): void {
    currentWorkExperiences.clear();

    newWorkExperiences.forEach((we) => {
      currentWorkExperiences.push(
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

  setEducation(currentEducations: FormArray, newEducations: Education[]): void {
    currentEducations.clear();

    newEducations.forEach((we) => {
      currentEducations.push(
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

  setForm(resumeForm: FormGroup, resumeInstance: ResumeInstance) {
    this.setObjective(resumeForm, resumeInstance.objective);

    this.setWorkExperience(
      resumeForm.get('workExperiences') as FormArray,
      resumeInstance.workExperiences,
    );
    this.setEducation(
      resumeForm.get('educations') as FormArray,
      resumeInstance.educations,
    );

    resumeForm.patchValue({
      resumeName: resumeInstance.resumeName,
    });

    resumeForm.markAsPristine();
  }
}
