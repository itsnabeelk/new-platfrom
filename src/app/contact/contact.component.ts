import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  options: AnimationOptions = {
    path: 'assets/img/about/banner.json'
  };
  options2: AnimationOptions = {
    path: 'assets/img/contact/bglines.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {

  }
}
