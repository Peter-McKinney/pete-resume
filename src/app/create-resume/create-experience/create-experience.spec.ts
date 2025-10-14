import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExperience } from './create-experience';

describe('CreateExperience', () => {
  let component: CreateExperience;
  let fixture: ComponentFixture<CreateExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
