import { Component, computed, input } from '@angular/core';
import { ResumeWorkExperienceRow } from '../resume-work-experience-row/resume-work-experience-row';
import { WorkExperience } from '../resume-work-experience-row/work-experience.model';
import { CommonModule } from '@angular/common';
import { Card } from '../../common/card/card.model';
import { ResumeCard } from '../../common/card/card';

@Component({
  selector: 'app-resume-work-experience-section',
  imports: [CommonModule, ResumeCard],
  templateUrl: './resume-work-experience-section.html',
  styleUrl: './resume-work-experience-section.scss',
})
export class ResumeWorkExperienceSection {
  workExperiences = input.required<WorkExperience[]>();

  readonly cards = computed<Card[]>(() => {
    return this.workExperiences().map((workExperience) => {
      return {
        title: workExperience.title,
        subTitle: workExperience.dateRange,
        items: workExperience.experiences,
      };
    });
  });
}
