import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeObjective } from './resume-objective';

describe('ResumeObjective', () => {
  let component: ResumeObjective;
  let fixture: ComponentFixture<ResumeObjective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeObjective],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeObjective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
