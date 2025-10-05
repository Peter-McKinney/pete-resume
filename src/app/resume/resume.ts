import { Component } from '@angular/core';
import { ResumeHeader } from './resume-header/resume-header';
import { Header } from './resume-header/resume-header.model';

@Component({
  selector: 'app-resume',
  imports: [ResumeHeader],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  resumeHeader: Header = {
    displayName: 'Pete McKinney',
    contactInfo: {
      email: 'pmckinney.development@gmail.com',
      phone: '8503771940',
      github: 'https://github.com/Peter-McKinney',
      city: 'Mobile',
      stateAbbreviation: 'Al',
    },
    objective:
      'To obtain a challenging position as a software engineer where I can utilize my skills and experience to contribute to the success of the company.',
  };
}
