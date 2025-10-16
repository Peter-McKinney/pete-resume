import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeLayout } from './common/resume-layout/resume-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumeLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('pete-resume');
}
