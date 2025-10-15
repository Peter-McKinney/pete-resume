import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducationNotes } from './create-education-notes';

describe('CreateEducationNotes', () => {
  let component: CreateEducationNotes;
  let fixture: ComponentFixture<CreateEducationNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEducationNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEducationNotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
