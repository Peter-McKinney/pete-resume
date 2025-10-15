import { inject, Injectable } from '@angular/core';
import { collection, limit, query, where } from 'firebase/firestore';
import { Observable, combineLatest, map } from 'rxjs';
import { WorkExperience } from '../resume/resume-work-experience-section/work-experience.model';
import {
  collectionData,
  doc,
  Firestore,
  orderBy,
} from '@angular/fire/firestore';
import { Education } from '../resume/resume-education-section/education.model';
import { Objective } from '../resume/resume-objective/objective.model';
import { ResumeInstance } from '../resume/resume.model';
import { CollectionReference } from '@angular/fire/firestore/lite';

@Injectable({
  providedIn: 'root',
})
export class ResumeStore {
  private firestore = inject(Firestore);

  getResumeForm(resumeId: string): Observable<ResumeInstance> {
    const resumeDoc = doc(this.firestore, `resumes/${resumeId}`);

    const objective$ = this.getObjective(resumeId);
    const workExperiences$ = this.getWorkExperience(resumeId);
    const educations$ = this.getEducation(resumeId);

    return combineLatest([objective$, workExperiences$, educations$]).pipe(
      map(([objective, workExperiences, educations]) => {
        return {
          resumeId: resumeDoc.id,
          objective: objective?.text || '',
          workExperiences: workExperiences || [],
          educations: educations || [],
        };
      }),
    );
  }

  getLatestQuery(ref: CollectionReference, resumeId: string) {
    const q = query(
      ref,
      where('resumeId', '==', resumeId),
      where('createdAt', '!=', null),
      orderBy('createdAt', 'desc'),
      limit(1),
    );

    return q;
  }

  getObjective(resumeId: string): Observable<Objective> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get objective');
    }

    const objectiveRef = collection(this.firestore, `objectives`);

    const q = this.getLatestQuery(objectiveRef, resumeId);

    return collectionData(q, { idField: 'id' }).pipe(
      map((objectives) => objectives[0] as Objective),
    );
  }

  getWorkExperience(resumeId: string): Observable<WorkExperience[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get work experience.');
    }

    const workRef = collection(this.firestore, `work-experiences`);

    const q = this.getLatestQuery(workRef, resumeId);

    const workExperiences$ = collectionData(q, { idField: 'id' }).pipe(
      map((workExperiences) => {
        return workExperiences[0]?.['experiences'] as WorkExperience[];
      }),
    );

    return workExperiences$;
  }

  getEducation(resumeId: string): Observable<Education[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get education');
    }

    const educationRef = collection(this.firestore, `educations`);

    const q = this.getLatestQuery(educationRef, resumeId);

    const educations$ = collectionData(q, { idField: 'id' }).pipe(
      map((educations) => {
        return educations[0]?.['educations'] as Education[];
      }),
    );

    return educations$;
  }
}
