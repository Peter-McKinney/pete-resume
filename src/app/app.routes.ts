import { Routes } from '@angular/router';
import { Resume } from './resume/resume';
import { CreateResume } from './create-resume/create-resume';

export const routes: Routes = [
  {
    path: ':resumeId',
    component: Resume,
  },
  {
    path: 'resume/create',
    component: CreateResume,
  },
];
