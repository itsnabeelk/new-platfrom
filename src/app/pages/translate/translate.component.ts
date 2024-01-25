import { Component } from '@angular/core';
declare function customSelect():void;
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
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
    customSelect();
  }
}
