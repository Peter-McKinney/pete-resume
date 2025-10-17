import { Component, EventEmitter, Output } from '@angular/core';
import { IconDirective } from '../directives/icon';

@Component({
  selector: 'app-form-array-section',
  imports: [IconDirective],
  templateUrl: './form-array-section.html',
  styleUrl: './form-array-section.scss',
})
export class FormArraySection {
  @Output() addClicked: EventEmitter<void> = new EventEmitter<void>();

  add(): void {
    this.addClicked.emit();
  }
}
