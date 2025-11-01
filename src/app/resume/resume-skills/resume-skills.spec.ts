import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeSkills } from './resume-skills';

describe('ResumeSkills', () => {
  let component: ResumeSkills;
  let fixture: ComponentFixture<ResumeSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
