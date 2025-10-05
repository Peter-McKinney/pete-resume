import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-resume-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class ResumeCard {
  card = input.required<Card>();
  isAlternate = input<boolean>(false);
}
