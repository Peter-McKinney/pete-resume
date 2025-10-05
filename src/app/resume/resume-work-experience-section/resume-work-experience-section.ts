import { Component, input } from '@angular/core';
import { ResumeWorkExperienceRow } from '../resume-work-experience-row/resume-work-experience-row';
import { WorkExperience } from '../resume-work-experience-row/work-experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-work-experience-section',
  imports: [ResumeWorkExperienceRow, CommonModule],
  templateUrl: './resume-work-experience-section.html',
  styleUrl: './resume-work-experience-section.scss',
})
export class ResumeWorkExperienceSection {
  workExperiences = input.required<WorkExperience[]>();
}
