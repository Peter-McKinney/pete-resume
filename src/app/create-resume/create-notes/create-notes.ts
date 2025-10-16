import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import {
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormArraySection } from '../../common/form-array-section/form-array-section';
import { FormResumeControl } from '../../common/form-control/form-control';
import { FormArraySubSection } from '../../common/form-array-sub-section/form-array-sub-section';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-notes',
  imports: [
    ReactiveFormsModule,
    FormArraySection,
    FormResumeControl,
    FormArraySubSection,
  ],
  templateUrl: './create-notes.html',
  styleUrl: './create-notes.scss',
})
export class CreateNotes {
  readonly notes = input.required<FormArray<FormControl>>();

  addNote() {
    this.notes().push(new FormControl('', [Validators.required]));
  }

  removeNote(index: number) {
    this.notes().removeAt(index);
  }
}
