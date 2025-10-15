import { Component, input } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormArraySection } from '../../../common/form-array-section/form-array-section';
import { FormArraySubSection } from '../../../common/form-array-sub-section/form-array-sub-section';
import { FormResumeControl } from '../../../common/form-control/form-control';

@Component({
  selector: 'app-create-education-notes',
  imports: [
    ReactiveFormsModule,
    FormArraySection,
    FormArraySubSection,
    FormResumeControl,
  ],
  templateUrl: './create-education-notes.html',
  styleUrl: './create-education-notes.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormArrayName }],
})
export class CreateEducationNotes {
  notes = input.required<FormArray<FormControl>>();

  addNote() {
    this.notes().push(new FormControl('', [Validators.required]));
  }

  removeNote(index: number) {
    this.notes().removeAt(index);
  }
}
