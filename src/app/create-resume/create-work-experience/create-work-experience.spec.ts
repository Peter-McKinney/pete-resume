import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkExperience } from './create-work-experience';

describe('CreateWorkExperience', () => {
  let component: CreateWorkExperience;
  let fixture: ComponentFixture<CreateWorkExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWorkExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWorkExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
