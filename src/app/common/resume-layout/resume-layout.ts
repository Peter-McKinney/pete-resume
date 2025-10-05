import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { ResumeHeader } from '../../resume/resume-header/resume-header';
import { Header } from '../../resume/resume-header/resume-header.model';

@Component({
  selector: 'app-resume-layout',
  imports: [Sidebar, ResumeHeader],
  templateUrl: './resume-layout.html',
  styleUrl: './resume-layout.scss',
})
export class ResumeLayout {
  header: Header = {
    displayName: 'Pete McKinney',
    contactInfo: {
      email: 'pmckinney.development@gmail.com',
      phone: '8503771940',
      github: 'https://github.com/Peter-McKinney',
      city: 'Mobile',
      stateAbbreviation: 'Al',
    },
  };
}
