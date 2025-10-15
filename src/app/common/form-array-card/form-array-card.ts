import { Component, output } from '@angular/core';

@Component({
  selector: 'app-form-array-card',
  imports: [],
  templateUrl: './form-array-card.html',
  styleUrl: './form-array-card.scss',
})
export class FormArrayCard {
  deleteClicked = output<void>();

  delete(): void {
    this.deleteClicked.emit();
  }
}
