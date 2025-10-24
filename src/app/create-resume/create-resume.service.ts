import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import type { ResumeInstance } from '../resume/resume.model';

@Injectable({
  providedIn: 'root',
})
export class CreateResumeService {
  private readonly firestore = inject(Firestore);

  async createBlankResume(): Promise<string> {
    const docRef = await addDoc(collection(this.firestore, 'resumes'), {
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  }

  async createOrUpdate(resume: ResumeInstance): Promise<string> {
    await updateDoc(doc(this.firestore, `resumes/${resume.resumeId}`), {
      resumeName: resume.resumeName,
    });

    await addDoc(collection(this.firestore, 'objectives'), {
      resumeId: resume.resumeId,
      text: resume.objective,
      createdAt: serverTimestamp(),
    });

    await addDoc(collection(this.firestore, 'work-experiences'), {
      resumeId: resume.resumeId,
      experiences: resume.workExperiences,
      createdAt: serverTimestamp(),
    });

    await addDoc(collection(this.firestore, 'educations'), {
      resumeId: resume.resumeId,
      educations: resume.educations,
      createdAt: serverTimestamp(),
    });

    return '';
  }
}
