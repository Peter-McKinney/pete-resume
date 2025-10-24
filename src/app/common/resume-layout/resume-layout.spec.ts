import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ResumeLayout } from './resume-layout';

describe('ResumeLayout', () => {
  let component: ResumeLayout;
  let fixture: ComponentFixture<ResumeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
