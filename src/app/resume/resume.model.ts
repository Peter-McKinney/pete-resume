import type { Education } from './resume-education-section/education.model';
import type { WorkExperience } from './resume-work-experience-section/work-experience.model';

export interface ResumeInstance {
  resumeId: string;
  resumeName: string;
  objective: string;
  workExperiences: WorkExperience[];
  educations: Education[];
}
