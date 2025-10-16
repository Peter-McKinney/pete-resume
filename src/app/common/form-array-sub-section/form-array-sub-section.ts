import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-form-array-sub-section',
  imports: [],
  templateUrl: './form-array-sub-section.html',
  styleUrl: './form-array-sub-section.scss',
})
export class FormArraySubSection {
  deleteClicked = output<void>();
  addClicked = output<void>();

  delete(): void {
    this.deleteClicked.emit();
  }

  add(): void {
    this.addClicked.emit();
  }
}
