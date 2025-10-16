import { Component, computed, input } from '@angular/core';
import { ContactInfo } from './contact-info.model';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume-contact-info',
  imports: [NgOptimizedImage, RouterLink],
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
