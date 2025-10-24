import { Component, input } from '@angular/core';
import type { Header } from './resume-header.model';
import { Avatar } from '../../common/avatar/avatar';
import { ResumeContactInfo } from '../resume-contact-info/resume-contact-info';

@Component({
  selector: 'app-resume-header',
  imports: [Avatar, ResumeContactInfo],
  templateUrl: './resume-header.html',
  styleUrl: './resume-header.scss',
})
export class ResumeHeader {
  readonly resumeHeader = input.required<Header>();
}
