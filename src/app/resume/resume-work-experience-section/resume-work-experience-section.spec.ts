import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeWorkExperienceSection } from './resume-work-experience-section';

describe('ResumeWorkExperienceSection', () => {
  let component: ResumeWorkExperienceSection;
  let fixture: ComponentFixture<ResumeWorkExperienceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeWorkExperienceSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeWorkExperienceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
