import { Component } from '@angular/core';
import { ResumeObjective } from './resume-objective/resume-objective';
import { ResumeWorkExperienceSection } from './resume-work-experience-section/resume-work-experience-section';
import { ResumeEducationSection } from './resume-education-section/resume-education-section';

@Component({
  selector: 'app-resume',
  imports: [
    ResumeObjective,
    ResumeWorkExperienceSection,
    ResumeEducationSection,
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  objective =
    'I have 15 years’ experience as a full stack developer. I am seeking a senior development position that will allow for growth in my programming career. In this position, I hope to collaborate with and lead other developers to produce software products that satisfy product owner needs using current programming methodologies.';
}
