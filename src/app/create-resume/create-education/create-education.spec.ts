import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducation } from './create-education';

describe('CreateEducation', () => {
  let component: CreateEducation;
  let fixture: ComponentFixture<CreateEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
