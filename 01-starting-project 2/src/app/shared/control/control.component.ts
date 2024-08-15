import { Component, HostBinding, HostListener, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  /* host: {
    class: 'control',
    '(click)': 'onClick()'
  } */
})
export class ControlComponent {
  label = input.required<string>();
  @HostBinding() class = 'control';
  @HostListener('click') onClick(){
    console.log('clicked')
  }

  /* onClick() {
    console.log('the host element was clicked')
  } */
}
