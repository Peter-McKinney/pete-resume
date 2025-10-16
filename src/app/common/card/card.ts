import { CommonModule } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Card } from './card.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class ResumeCard {
  readonly card = input.required<Card>();
  readonly isAlternate = input<boolean>(false);
}
