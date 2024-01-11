import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sucess-modal',
  templateUrl: './sucess-modal.component.html',
  styleUrl: './sucess-modal.component.css'
})
export class SucessModalComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']); // Replace '/home' with the actual path of your home page
    }, 3000); // Adjust the delay time (in milliseconds) as needed
  }
}

