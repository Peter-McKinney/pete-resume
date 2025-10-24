import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { ListResume } from './list-resume';

describe('ListResume', () => {
  let component: ListResume;
  let fixture: ComponentFixture<ListResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListResume],
    }).compileComponents();

    fixture = TestBed.createComponent(ListResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
