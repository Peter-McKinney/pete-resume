import type { ContactInfo } from '../resume-contact-info/contact-info.model';

export interface Header {
  displayName: string;
  contactInfo: ContactInfo;
}
