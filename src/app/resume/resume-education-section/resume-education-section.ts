import { Component, computed, input } from '@angular/core';
import type { Education } from './education.model';
import type { Card } from '../../common/card/card.model';
import { ResumeCard } from '../../common/card/card';

@Component({
  selector: 'app-resume-education-section',
  imports: [ResumeCard],
  templateUrl: './resume-education-section.html',
  styleUrl: './resume-education-section.scss',
})
export class ResumeEducationSection {
  readonly educations = input.required<Education[]>();

  readonly cards = computed<Card[]>(() => {
    return this.educations().map((education) => {
      return {
        title: education.institution,
        subTitle: education.dateRange,
        itemsHeader: education.location,
        items: education.notes,
      };
    });
  });
}
