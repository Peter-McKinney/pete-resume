import { Component, input } from '@angular/core';
import type { Skill } from './skill.model';

@Component({
  selector: 'app-resume-skills',
  imports: [],
  templateUrl: './resume-skills.html',
  styleUrl: './resume-skills.scss',
})
export class ResumeSkills {
  readonly skills = input.required<Skill[]>();
}
