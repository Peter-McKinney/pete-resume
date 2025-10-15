import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CreateResumeService } from '../create-resume.service';

export const createResumeGuard: CanActivateFn = async () => {
  const router = inject(Router);

  const createResumeService = inject(CreateResumeService);
  const resumeId = await createResumeService.createBlankResume();

  return router.createUrlTree(['/resume', 'edit', resumeId]);
};
