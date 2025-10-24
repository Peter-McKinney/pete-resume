import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeContactInfo } from './resume-contact-info';

describe('ResumeContactInfo', () => {
  let component: ResumeContactInfo;
  let fixture: ComponentFixture<ResumeContactInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeContactInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeContactInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
