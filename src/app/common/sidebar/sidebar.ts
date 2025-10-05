import { Component } from '@angular/core';
import { Header } from '../../resume/resume-header/resume-header.model';
import { ResumeHeader } from '../../resume/resume-header/resume-header';

@Component({
  selector: 'app-sidebar',
  imports: [ResumeHeader],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
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
