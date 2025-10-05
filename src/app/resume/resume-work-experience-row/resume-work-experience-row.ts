import { Component, computed, input } from '@angular/core';
import { WorkExperience } from './work-experience.model';
import { CommonModule } from '@angular/common';
import { Card } from '../../common/card/card.model';
import { ResumeCard } from '../../common/card/card';

@Component({
  selector: 'app-resume-work-experience-row',
  imports: [CommonModule, ResumeCard],
  templateUrl: './resume-work-experience-row.html',
  styleUrl: './resume-work-experience-row.scss',
})
export class ResumeWorkExperienceRow {
  workExperience = input.required<WorkExperience>();

  card = computed<Card>(() => {
    return {
      title: this.workExperience().title,
      subTitle: this.workExperience().dateRange,
      items: this.workExperience().experiences,
    };
  });
}
