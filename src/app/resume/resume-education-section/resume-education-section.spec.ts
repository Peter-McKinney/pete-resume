import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEducationSection } from './resume-education-section';

describe('ResumeEducationSection', () => {
  let component: ResumeEducationSection;
  let fixture: ComponentFixture<ResumeEducationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeEducationSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeEducationSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
