import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { FormArraySection } from './form-array-section';

describe('FormArraySection', () => {
  let component: FormArraySection;
  let fixture: ComponentFixture<FormArraySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArraySection],
    }).compileComponents();

    fixture = TestBed.createComponent(FormArraySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
