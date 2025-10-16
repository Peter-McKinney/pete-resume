import { Component, inject } from '@angular/core';
import { ResumeStore } from '../services/resume.store';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-list-resume',
  imports: [RouterLink],
  templateUrl: './list-resume.html',
  styleUrl: './list-resume.scss',
})
export class ListResume {
  readonly resumeStore = inject(ResumeStore);
  readonly resumes = toSignal(this.resumeStore.getAllResumes());
  clipboard = inject(Clipboard);

  copyResumeUrl(resumeId: string) {
    const url = `${document.location.origin}/resume/edit/${resumeId}`;
    this.clipboard.copy(url);
  }
}
