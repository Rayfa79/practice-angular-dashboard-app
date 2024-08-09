import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true}) image!: {src: string, alt: string};
  @Input({required: true}) title!: string;

  //Alternatively can use input funtions instead of decorator. import input function
  // Must add () when calling image or title via property binding because of signals
      //image = input.required<{ src: string, alt: string}>();
      //title = input.required<string>();
}
