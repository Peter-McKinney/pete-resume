import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkExperienceRow } from './resume-work-experience-row';

describe('ResumeWorkExperienceRow', () => {
  let component: ResumeWorkExperienceRow;
  let fixture: ComponentFixture<ResumeWorkExperienceRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeWorkExperienceRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeWorkExperienceRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
