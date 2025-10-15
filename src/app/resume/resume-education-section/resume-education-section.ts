import { Component, computed, input } from '@angular/core';
import { Education } from './education.model';
import { Card } from '../../common/card/card.model';
import { ResumeCard } from '../../common/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-education-section',
  imports: [ResumeCard, CommonModule],
  templateUrl: './resume-education-section.html',
  styleUrl: './resume-education-section.scss',
})
export class ResumeEducationSection {
  educations = input.required<Education[]>();

  cards = computed<Card[]>(() => {
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
