import { Component, output } from '@angular/core';
import { IconDirective } from '../directives/icon';

@Component({
  selector: 'app-form-array-card',
  imports: [IconDirective],
  templateUrl: './form-array-card.html',
  styleUrl: './form-array-card.scss',
})
export class FormArrayCard {
  deleteClicked = output();

  delete(): void {
    this.deleteClicked.emit();
  }
}
