import { Component, effect, inject, Signal, signal } from '@angular/core';
import { ResumeObjective } from './resume-objective/resume-objective';
import { ResumeWorkExperienceSection } from './resume-work-experience-section/resume-work-experience-section';
import { ResumeEducationSection } from './resume-education-section/resume-education-section';
import { Objective } from './resume-objective/objective.model';
import { ResumeStore } from '../services/resume.store';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { WorkExperience } from './resume-work-experience-section/work-experience.model';

@Component({
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
  readonly objective: Signal<Objective | undefined>;
  readonly workExperiences: Signal<WorkExperience[] | undefined>;

  resumeStore = inject(ResumeStore);

  route = inject(ActivatedRoute);
  routeResumeId = this.route.snapshot.params['resumeId'];

  constructor() {
    this.objective = toSignal(
      this.resumeStore.getObjective(this.routeResumeId),
    );

    this.workExperiences = toSignal(
      this.resumeStore.getWorkExperience(this.routeResumeId),
    );
  }

  educations = [
    {
      institution: 'State University',
      dateRange: '2011 - 2015',
      itemsHeader: 'Bachelor of Science in Computer Science',
      items: [
        'Graduated with Honors',
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
      ],
    },
    {
      institution: 'Community College',
      dateRange: '2009 - 2011',
      itemsHeader: 'Bachelor of Science in Computer Science',
      items: [
        'Associate Degree in Information Technology',
        'Dean’s List for 4 semesters',
        'Relevant Coursework: Programming Fundamentals, Network Basics, System Administration',
      ],
    },
  ];
}
