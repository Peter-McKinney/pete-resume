import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { createResumeResolver } from './create-resume-resolver';

describe('createResumeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      createResumeResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
