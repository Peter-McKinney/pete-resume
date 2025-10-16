import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ResumeObjective } from './resume-objective/resume-objective';
import { ResumeWorkExperienceSection } from './resume-work-experience-section/resume-work-experience-section';
import { ResumeEducationSection } from './resume-education-section/resume-education-section';
import { ResumeStore } from '../services/resume.store';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume',
  imports: [
    ResumeObjective,
    ResumeWorkExperienceSection,
    ResumeEducationSection,
    CommonModule,
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  route = inject(ActivatedRoute);
  routeResumeId = this.route.snapshot.params['resumeId'];
  resumeStore = inject(ResumeStore);

  readonly objective = toSignal(
    this.resumeStore.getObjective(this.routeResumeId),
  );
  readonly workExperiences = toSignal(
    this.resumeStore.getWorkExperience(this.routeResumeId),
  );
  readonly educations = toSignal(
    this.resumeStore.getEducation(this.routeResumeId),
  );
}
