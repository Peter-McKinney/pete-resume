import { inject, Injectable } from '@angular/core';
import { collection, limit, orderBy, query, where } from 'firebase/firestore';
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

  getWorkExperience(resumeId: string): Observable<WorkExperience[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get work experience.');
    }

    const workRef = collection(this.firestore, `work-experiences`);

    const q = query(
      workRef,
      where('resumeId', '==', resumeId),
      orderBy('dateRange', 'asc'),
    );

    const workExperiences$ = collectionData(q, { idField: 'id' }) as Observable<
      WorkExperience[]
    >;

    workExperiences$.subscribe((data) => {
      console.log(data, 'work experiences data');
    });

    return workExperiences$;
  }

  getEducation(resumeId: string): Observable<Education[]> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get education');
    }

    const educationRef = collection(this.firestore, `educations`);

    const q = query(
      educationRef,
      where('resumeId', '==', resumeId),
      orderBy('endDate', 'asc'),
    );

    const educations$ = collectionData(q, { idField: 'id' }) as Observable<
      Education[]
    >;

    return educations$;
  }

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
}
