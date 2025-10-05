import { Component, input } from '@angular/core';
import { Header } from './resume-header.model';
import { ResumeContactInfo } from '../resume-contact-info/resume-contact-info';

@Component({
  selector: 'app-resume-header',
  imports: [ResumeContactInfo],
  templateUrl: './resume-header.html',
  styleUrl: './resume-header.scss',
})
export class ResumeHeader {
  readonly resumeHeader = input.required<Header>();
}
