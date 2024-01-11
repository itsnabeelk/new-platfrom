import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
declare function bootstrapToUnr():void;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  options: AnimationOptions = {
    path: 'assets/img/chatbot/chatbot.json'
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
    ngOnInit() {
    bootstrapToUnr();
  }
}



