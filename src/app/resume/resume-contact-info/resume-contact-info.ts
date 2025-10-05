import { Component, computed, input } from '@angular/core';
import { ContactInfo } from './contact-info.model';

@Component({
  selector: 'app-resume-contact-info',
  imports: [],
  templateUrl: './resume-contact-info.html',
  styleUrl: './resume-contact-info.scss',
})
export class ResumeContactInfo {
  contactInfo = input.required<ContactInfo>();

  locationDisplay = computed<string>(() => {
    return `${this.contactInfo().city}, ${this.contactInfo().stateAbbreviation}`;
  });

  mailToLink = computed<string>(() => {
    return `mailto:${this.contactInfo().email}`;
  });

  telLink = computed<string>(() => {
    return `tel:${this.contactInfo().phone}`;
  });
}
