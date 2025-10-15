import { Routes } from '@angular/router';
import { Resume } from './resume/resume';
import { createResumeGuard } from './create-resume/guards/create-resume.guard';
import { EditResume } from './create-resume/edit-resume';

export const routes: Routes = [
  {
    path: ':resumeId',
    component: Resume,
  },
  {
    path: 'resume/create',
    component: EditResume,
    canActivate: [createResumeGuard],
  },
  {
    path: 'resume/edit/:resumeId',
    component: EditResume,
  },
];
