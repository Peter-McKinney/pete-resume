import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { ResumeHeader } from '../../resume/resume-header/resume-header';
import { Header } from '../../resume/resume-header/resume-header.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume-layout',
  imports: [Sidebar, ResumeHeader],
  templateUrl: './resume-layout.html',
  styleUrl: './resume-layout.scss',
})
export class ResumeLayout {
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
