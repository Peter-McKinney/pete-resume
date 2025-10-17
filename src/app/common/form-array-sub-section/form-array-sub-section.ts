import { Component, output } from '@angular/core';
import { IconDirective } from '../directives/icon';

@Component({
  selector: 'app-form-array-sub-section',
  imports: [IconDirective],
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
