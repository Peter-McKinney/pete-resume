import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIcon]',
  host: {
    class: 'material-symbols-outlined',
    innerText: '{{ iconName }}',
  },
})
export class IconDirective implements OnInit {
  readonly elementRef = inject(ElementRef);
  readonly iconName = input.required<string>({ alias: 'appIcon' });

  ngOnInit(): void {
    this.elementRef.nativeElement.innerText = this.iconName();
  }
}
