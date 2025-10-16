import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resume-objective',
  imports: [],
  templateUrl: './resume-objective.html',
  styleUrl: './resume-objective.scss',
})
export class ResumeObjective {
  readonly objective = input.required<string>();
}
