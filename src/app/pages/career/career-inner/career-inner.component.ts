import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-career-inner',
  templateUrl: './career-inner.component.html',
  styleUrl: './career-inner.component.css'
})
export class CareerInnerComponent {
  options: AnimationOptions = {
    path: 'assets/img/career/bglines.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {

  }
}
