import { Routes } from '@angular/router';
import { Resume } from './resume/resume';
import { createResumeGuard } from './create-resume/guards/create-resume.guard';
import { EditResume } from './create-resume/edit-resume';
import { ListResume } from './list-resume/list-resume';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tgXFUSgAJWE0xWWzMxx6',
    pathMatch: 'full',
  },
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
  {
    path: 'resume/list',
    component: ListResume,
  },
];
