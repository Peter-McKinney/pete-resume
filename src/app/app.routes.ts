import { Routes } from '@angular/router';
import { Resume } from './resume/resume';

export const routes: Routes = [
  {
    path: ':resumeId',
    component: Resume,
  },
];
