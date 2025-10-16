import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume-objective',
  imports: [],
  templateUrl: './resume-objective.html',
  styleUrl: './resume-objective.scss',
})
export class ResumeObjective {
  readonly objective = input.required<string>();
}
