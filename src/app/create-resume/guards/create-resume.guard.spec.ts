import { TestBed } from '@angular/core/testing';
import type { CanActivateFn } from '@angular/router';
import { createResumeGuard } from './create-resume.guard';

describe('createResumeGuard', () => {
  const executeGuard: CanActivateFn = async (...guardParameters) =>
    TestBed.runInInjectionContext(async () =>
      createResumeGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
