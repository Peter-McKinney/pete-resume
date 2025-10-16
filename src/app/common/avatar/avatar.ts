import { NgOptimizedImage } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-avatar',
  imports: [NgOptimizedImage],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {}
