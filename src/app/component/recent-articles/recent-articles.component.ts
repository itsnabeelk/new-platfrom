import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-recent-articles',
  templateUrl: './recent-articles.component.html',
  styleUrl: './recent-articles.component.css'
})
export class RecentArticlesComponent {
  options: AnimationOptions = {
    path: 'assets/img/article/article.json'
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
