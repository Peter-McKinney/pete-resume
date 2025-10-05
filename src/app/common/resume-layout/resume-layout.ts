import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-resume-layout',
  imports: [Sidebar],
  templateUrl: './resume-layout.html',
  styleUrl: './resume-layout.scss',
})
export class ResumeLayout {}
