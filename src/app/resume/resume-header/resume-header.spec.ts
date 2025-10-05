import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHeader } from './resume-header';

describe('ResumeHeader', () => {
  let component: ResumeHeader;
  let fixture: ComponentFixture<ResumeHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
