import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArraySubSection } from './form-array-sub-section';

describe('FormArraySubSection', () => {
  let component: FormArraySubSection;
  let fixture: ComponentFixture<FormArraySubSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArraySubSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FormArraySubSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
