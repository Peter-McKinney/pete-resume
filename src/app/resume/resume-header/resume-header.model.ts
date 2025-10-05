import { ContactInfo } from '../resume-contact-info/contact-info.model';

export interface Header {
  displayName: string;
  objective: string;
  contactInfo: ContactInfo;
}
