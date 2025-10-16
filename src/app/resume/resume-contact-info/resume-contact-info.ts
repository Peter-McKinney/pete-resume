import {
  Component,
  computed,
  input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ContactInfo } from './contact-info.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume-contact-info',
  imports: [NgOptimizedImage],
  templateUrl: './resume-contact-info.html',
  styleUrl: './resume-contact-info.scss',
})
export class ResumeContactInfo {
  readonly contactInfo = input.required<ContactInfo>();

  readonly locationDisplay = computed<string>(() => {
    return `${this.contactInfo().city}, ${this.contactInfo().stateAbbreviation}`;
  });

  readonly mailToLink = computed<string>(() => {
    return `mailto:${this.contactInfo().email}`;
  });

  readonly telLink = computed<string>(() => {
    return `tel:${this.contactInfo().phone}`;
  });
}
