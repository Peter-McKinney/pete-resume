import { Component, effect, inject, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CreateWorkExperience } from './create-work-experience/create-work-experience';
import { CreateEducation } from './create-education/create-education';
import { CreateResumeService } from './create-resume.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeInstance } from '../resume/resume.model';
import { ResumeStore } from '../services/resume.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormResumeControl } from '../common/form-control/form-control';
import { FormService } from './services/form.service';
import { IconDirective } from '../common/directives/icon';

@Component({
  selector: 'app-edit-resume',
  imports: [
    ReactiveFormsModule,
    CreateWorkExperience,
    CreateEducation,
    FormResumeControl,
    IconDirective,
  ],
  templateUrl: './edit-resume.html',
  styleUrl: './edit-resume.scss',
})
export class EditResume implements OnDestroy {
  formBuilder = inject(FormBuilder);
  formService = inject(FormService);

  router = inject(Router);

  createResumeService = inject(CreateResumeService);
  resumeStore = inject(ResumeStore);

  activatedRoute = inject(ActivatedRoute);
  resumeId = this.activatedRoute.snapshot.params['resumeId'];

  readonly resumeFromFirestore = toSignal(
    this.resumeStore.getResumeForm(this.resumeId),
  );

  resumeForm = this.formService.buildResumeForm(this.resumeId);

  hydrateFormEffect = effect(() => {
    if (
      this.resumeFromFirestore() &&
      this.resumeFromFirestore()?.educations &&
      this.resumeFromFirestore()?.workExperiences &&
      this.resumeFromFirestore()?.objective
    ) {
      const resumeInstance =
        this.resumeFromFirestore() ?? ({} as ResumeInstance);
      this.formService.setForm(this.resumeForm, resumeInstance);
    }
  });

  ngOnDestroy(): void {
    this.hydrateFormEffect.destroy();
  }

  get workExperiences(): FormArray {
    return this.resumeForm.get('workExperiences') as FormArray;
  }

  get educations(): FormArray {
    return this.resumeForm.get('educations') as FormArray;
  }

  get objective(): FormControl {
    return this.resumeForm.get('objective') as FormControl;
  }

  get resumeName(): FormControl {
    return this.resumeForm.get('resumeName') as FormControl;
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

    if (this.resumeForm.valid) {
      await this.createResumeService.createOrUpdate({
        ...this.resumeForm.value,
        resumeId: this.resumeId,
      } as ResumeInstance);
    }
  }
}
