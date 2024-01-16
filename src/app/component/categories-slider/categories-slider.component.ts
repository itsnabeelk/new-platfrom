import { Component } from '@angular/core';
declare function timelineSlider(): void;
@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.css'
})
export class CategoriesSliderComponent {
  ngOnInit() {
    timelineSlider();
  }
}
