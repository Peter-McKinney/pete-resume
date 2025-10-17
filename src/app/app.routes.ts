import { Routes } from '@angular/router';

import { createResumeGuard } from './create-resume/guards/create-resume.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tgXFUSgAJWE0xWWzMxx6',
    pathMatch: 'full',
  },
  {
    path: ':resumeId',
    loadComponent: () => import('./resume/resume').then((m) => m.Resume),
  },
  {
    path: 'resume/create',
    loadComponent: () =>
      import('./create-resume/edit-resume').then((m) => m.EditResume),
    canActivate: [createResumeGuard],
  },
  {
    path: 'resume/edit/:resumeId',
    loadComponent: () =>
      import('./create-resume/edit-resume').then((m) => m.EditResume),
  },
  {
    path: 'resume/list',
    loadComponent: () =>
      import('./list-resume/list-resume').then((m) => m.ListResume),
  },
];
