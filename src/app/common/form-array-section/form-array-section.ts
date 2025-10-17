import { Component, output } from '@angular/core';
import { IconDirective } from '../directives/icon';

@Component({
  selector: 'app-form-array-section',
  imports: [IconDirective],
  templateUrl: './form-array-section.html',
  styleUrl: './form-array-section.scss',
})
export class FormArraySection {
  readonly addClicked = output<void>();

  add(): void {
    // TODO: The 'emit' function requires a mandatory void argument
    this.addClicked.emit();
  }
}
