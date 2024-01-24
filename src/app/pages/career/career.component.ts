import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  options: AnimationOptions = {
    path: 'assets/img/about/banner.json'
  };
  options2: AnimationOptions = {
    path: 'assets/img/career/hiring.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {

  }
}