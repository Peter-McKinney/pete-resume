import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-array-section',
  imports: [],
  templateUrl: './form-array-section.html',
  styleUrl: './form-array-section.scss',
})
export class FormArraySection {
  @Output() addClicked: EventEmitter<void> = new EventEmitter<void>();

  add(): void {
    this.addClicked.emit();
  }
}
