import { Education } from './resume-education-section/education.model';
import { WorkExperience } from './resume-work-experience-section/work-experience.model';

export interface ResumeInstance {
  resumeId: string;
  resumeName: string;
  objective: string;
  workExperiences: WorkExperience[];
  educations: Education[];
}
