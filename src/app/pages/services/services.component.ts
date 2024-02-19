import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  options: AnimationOptions = {
    path: 'assets/img/about/banner.json'
  };
  options2: AnimationOptions = {
    path: 'assets/img/services/ai.json'
  };
  options3: AnimationOptions = {
    path: 'assets/img/services/translation.json'
  };
  options4: AnimationOptions = {
    path: 'assets/img/services/video.json'
  };
  options5: AnimationOptions = {
    path: 'assets/img/services/digital.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {

  }
}
