import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
