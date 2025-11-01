import { inject, Injectable } from '@angular/core';
import { collection, limit, query, where } from 'firebase/firestore';
import type { Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs';
import type { WorkExperience } from '../resume/resume-work-experience-section/work-experience.model';
import type { DocumentData, Query, Timestamp } from '@angular/fire/firestore';
import {
  collectionData,
  doc,
  docData,
  Firestore,
  orderBy,
} from '@angular/fire/firestore';
import type { Education } from '../resume/resume-education-section/education.model';
import type { Objective } from '../resume/resume-objective/objective.model';
import type { ResumeInstance } from '../resume/resume.model';
import type { CollectionReference } from '@angular/fire/firestore/lite';

export interface ResumeSummaryDoc {
  createdAt: Timestamp;
}

export interface ResumeSummary {
  id: string;
  resumeName: string;
  createdAt: Date | null;
}

@Injectable({
  providedIn: 'root',
})
export class ResumeStore {
  private readonly firestore = inject(Firestore);

  public getAllResumes(): Observable<ResumeSummary[]> {
    const resumesRef = collection(this.firestore, 'resumes');

    const q = query(resumesRef, orderBy('createdAt', 'desc'));

    return collectionData(q, { idField: 'id' }).pipe(
      map(
        (docs) =>
          docs.map((d: DocumentData) => ({
            ...d,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
            createdAt: d['createdAt'].toDate(),
          })) as ResumeSummary[],
      ),
    );
  }

  public getResumeForm(resumeId: string): Observable<ResumeInstance> {
    const resumeDocRef = doc(this.firestore, `resumes/${resumeId}`);
    const resumeDoc$ = docData(resumeDocRef) as Observable<ResumeInstance>;
    const objective$ = this.getObjective(resumeId);
    const workExperiences$ = this.getWorkExperience(resumeId);
    const educations$ = this.getEducation(resumeId);

    return combineLatest([
      objective$,
      workExperiences$,
      educations$,
      resumeDoc$,
    ]).pipe(
      map(([objective, workExperiences, educations, resume]) => {
        return {
          resumeId: resumeDocRef.id,
          resumeName: resume.resumeName,
          objective: objective.text || '',
          workExperiences: workExperiences,
          educations: educations,
        };
      }),
    );
  }

  public getLatestQuery(ref: CollectionReference, resumeId: string): Query {
    const q = query(
      ref,
      where('resumeId', '==', resumeId),
      where('createdAt', '!=', null),
      orderBy('createdAt', 'desc'),
      limit(1),
    );

    return q;
  }

  public getObjective(resumeId: string): Observable<Objective> {
    if (!resumeId) {
      throw new Error('Resume ID is required to get objective');
    }

    const objectiveRef = collection(this.firestore, `objectives`);

    const q = this.getLatestQuery(objectiveRef, resumeId);

    return collectionData(q, { idField: 'id' }).pipe(
      map((objectives: DocumentData) => objectives[0] as Objective),
    );
  }

  public getWorkExperience(resumeId: string): Observable<WorkExperience[]> {
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

  public getEducation(resumeId: string): Observable<Education[]> {
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
