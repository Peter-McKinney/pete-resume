import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../common/card/card.model';
import { ResumeCard } from '../../common/card/card';
import { WorkExperience } from './work-experience.model';

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
        itemsHeader: workExperience.companyName,
        items: workExperience.notes,
      };
    });
  });
}
