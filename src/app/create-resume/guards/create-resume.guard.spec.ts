import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { createResumeGuard } from './create-resume.guard';

describe('createResumeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => createResumeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
