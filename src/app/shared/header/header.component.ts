import { Component } from '@angular/core';
declare function bootstrapToUnr():void;
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ngOnInit() {
    bootstrapToUnr();
  }
}
