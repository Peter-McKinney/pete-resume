import { Component, inject } from '@angular/core';
import { ResumeStore } from '../services/resume.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-resume',
  imports: [RouterLink],
  templateUrl: './list-resume.html',
  styleUrl: './list-resume.scss',
})
export class ListResume {
  readonly resumeStore = inject(ResumeStore);
  readonly resumes = toSignal(this.resumeStore.getAllResumes());
}
