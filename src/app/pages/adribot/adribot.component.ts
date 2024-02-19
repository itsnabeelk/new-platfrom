import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-adribot',
  templateUrl: './adribot.component.html',
  styleUrl: './adribot.component.css'
})
export class AdribotComponent {
  options: AnimationOptions = {
    path: 'assets/img/about/banner.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {

  }
}
