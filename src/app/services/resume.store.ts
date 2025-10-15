import { inject, Injectable } from '@angular/core';
import { collection, limit, query, where } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { WorkExperience } from '../resume/resume-work-experience-section/work-experience.model';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Education } from '../resume/resume-education-section/education.model';
import { Objective } from '../resume/resume-objective/objective.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeStore {
  private firestore = inject(Firestore);

  getObjective(resumeId: string): Observable<Objective> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get objective');
    }

    const objectiveRef = collection(this.firestore, `objectives`);

    const q = query(objectiveRef, where('resumeId', '==', resumeId), limit(1));

    return collectionData(q, { idField: 'id' }).pipe(
      map((objectives) => objectives[0] as Objective),
    );
  }

  getWorkExperience(resumeId: string): Observable<WorkExperience[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get work experience.');
    }

    const workRef = collection(this.firestore, `work-experiences`);

    const q = query(workRef, where('resumeId', '==', resumeId));

    const workExperiences$ = collectionData(q, { idField: 'id' }).pipe(
      map((workExperiences) => {
        return workExperiences[0]['experiences'] as WorkExperience[];
      }),
    );

    return workExperiences$;
  }

  getEducation(resumeId: string): Observable<Education[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get education');
    }

    const educationRef = collection(this.firestore, `educations`);

    const q = query(educationRef, where('resumeId', '==', resumeId));

    const educations$ = collectionData(q, { idField: 'id' }).pipe(
      map((educations) => {
        return educations[0]['educations'] as Education[];
      }),
    );

    return educations$;
  }
}
