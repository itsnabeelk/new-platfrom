import { Component } from '@angular/core';
declare var $: any;
declare function bootstrapToUnr(): void;
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countdown: number = 20;
  options: AnimationOptions = {
    path: 'assets/img/home/hero-anim.json'
  };
  options2: AnimationOptions = {
    path: 'assets/img/home/info.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  
  ngOnInit() {
    bootstrapToUnr();
    
    $(document).ready(() => {
      $('#popupModal').modal('show');
    });

    window.setTimeout(() => {
      $(".betatag").fadeTo(500, 0).slideUp(500, () =>{
          $(this).remove(); 
      });
    }, 20000);
    const countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }
}