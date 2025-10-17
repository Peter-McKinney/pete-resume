import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormResumeControl } from './form-control';

describe('FormControl', () => {
  let component: FormResumeControl;
  let fixture: ComponentFixture<FormResumeControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResumeControl],
    }).compileComponents();

    fixture = TestBed.createComponent(FormResumeControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
