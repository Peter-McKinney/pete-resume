import { Routes } from '@angular/router';
import { Resume } from './resume/resume';
import { CreateResume } from './create-resume/create-resume';
import { createResumeResolver } from './create-resume/resolvers/create-resume-resolver';

export const routes: Routes = [
  {
    path: ':resumeId',
    component: Resume,
  },
  {
    path: 'resume/create',
    component: CreateResume,
    resolve: { resumeId: createResumeResolver },
  },
];
