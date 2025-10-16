import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from '../../resume/resume-header/resume-header.model';
import { ResumeHeader } from '../../resume/resume-header/resume-header';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sidebar',
  imports: [ResumeHeader],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  header: Header = {
    displayName: 'Pete McKinney',
    contactInfo: {
      email: 'fake@fake.com',
      phone: '1231231234',
      github: 'https://github.com/Peter-McKinney',
      city: 'Fake City',
      stateAbbreviation: 'Fl',
    },
  };
}
