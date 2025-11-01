import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { ResumeHeader } from '../../resume/resume-header/resume-header';
import type { Header } from '../../resume/resume-header/resume-header.model';
import { ResumeSkills } from '../../resume/resume-skills/resume-skills';
import type { Skill } from '../../resume/resume-skills/skill.model';

@Component({
  selector: 'app-resume-layout',
  imports: [Sidebar, ResumeHeader, ResumeSkills],
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

  skills: Skill[] = [
    {
      name: 'Angular',
    },
    { name: 'Vue' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Nodejs' },
    { name: 'NestJs' },
    { name: 'Unit Testing' },
    { name: 'JSON' },
    { name: 'CSS' },
    { name: 'SCSS' },
    { name: 'Github Actions' },
    { name: 'jQuery' },
    { name: 'C#' },
    { name: 'LINQ' },
    { name: 'ASP.NET MVC 3/4/5/Core' },
    { name: 'Classic ASP' },
    { name: 'ASP.NET Web Forms' },
    { name: 'Windows Forms' },
    { name: 'SSIS' },
    { name: 'SSRS' },
    { name: 'Entity Framework' },
    { name: 'Apache Cordova' },
    { name: 'Git' },
  ];
}
