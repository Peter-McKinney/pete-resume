import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CreateResumeService } from '../create-resume.service';
import { from } from 'rxjs';

export const createResumeResolver: ResolveFn<string> = () => {
  const createResumeService = inject(CreateResumeService);
  return from(createResumeService.createBlankResume());
};
