import { Component, input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-resume-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class ResumeCard {
  readonly card = input.required<Card>();
  readonly isAlternate = input<boolean>(false);
}
