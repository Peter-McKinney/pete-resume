import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayCard } from './form-array-card';

describe('FormArrayCard', () => {
  let component: FormArrayCard;
  let fixture: ComponentFixture<FormArrayCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FormArrayCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
