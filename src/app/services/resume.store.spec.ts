import { TestBed } from '@angular/core/testing';

import { ResumeStore } from './resume.store';

describe('ResumeStore', () => {
  let service: ResumeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
