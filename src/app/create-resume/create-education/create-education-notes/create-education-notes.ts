import { Component, input } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-education-notes',
  imports: [ReactiveFormsModule],
  templateUrl: './create-education-notes.html',
  styleUrl: './create-education-notes.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormArrayName }],
})
export class CreateEducationNotes {
  notes = input.required<FormArray>();

  addNote() {
    this.notes().push(new FormControl('', [Validators.required]));
  }

  notesControl(i: number): FormControl {
    return this.notes().at(i) as FormControl;
  }
}
