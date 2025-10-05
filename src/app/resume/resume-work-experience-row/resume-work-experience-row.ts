import { Component, input } from '@angular/core';
import { WorkExperience } from './work-experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-work-experience-row',
  imports: [CommonModule],
  templateUrl: './resume-work-experience-row.html',
  styleUrl: './resume-work-experience-row.scss',
})
export class ResumeWorkExperienceRow {
  workExperience = input.required<WorkExperience>();
}
