import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.css'
})
export class RegisterAccountComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  showPassword: boolean = false;
  ngAfterViewInit() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    passwordInput.addEventListener("input", this.checkPasswordCriteria);
    this.adjustHeight();
    this.renderer.listen('window', 'DOMContentLoaded', this.adjustHeight.bind(this));
    this.renderer.listen('window', 'resize', this.adjustHeight.bind(this));
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  checkPasswordCriteria(event: Event) {
    const passwordInput = event.target as HTMLInputElement;

    const lengthCriteria = document.getElementById("lengthCriteria") as HTMLElement;
    const uppercaseCriteria = document.getElementById("uppercaseCriteria") as HTMLElement;
    const lowercaseCriteria = document.getElementById("lowercaseCriteria") as HTMLElement;
    const numberCriteria = document.getElementById("numberCriteria") as HTMLElement;

    let validCriteria = true;
    const password = passwordInput.value;

    if (password.length < 8) {
      validCriteria = false;
      lengthCriteria.classList.remove("text-success"); // Remove green color
      lengthCriteria.classList.add("text-danger");
    } else {
      lengthCriteria.classList.remove("text-danger");
      lengthCriteria.classList.add("text-success"); // Add green color
    }

    if (!/[A-Z]/.test(password)) {
      validCriteria = false;
      uppercaseCriteria.classList.remove("text-success"); // Remove green color
      uppercaseCriteria.classList.add("text-danger");
    } else {
      uppercaseCriteria.classList.remove("text-danger");
      uppercaseCriteria.classList.add("text-success"); // Add green color
    }

    if (!/[a-z]/.test(password)) {
      validCriteria = false;
      lowercaseCriteria.classList.remove("text-success"); // Remove green color
      lowercaseCriteria.classList.add("text-danger");
    } else {
      lowercaseCriteria.classList.remove("text-danger");
      lowercaseCriteria.classList.add("text-success"); // Add green color
    }

    if (!/\d/.test(password)) {
      validCriteria = false;
      numberCriteria.classList.remove("text-success"); // Remove green color
      numberCriteria.classList.add("text-danger");
    } else {
      numberCriteria.classList.remove("text-danger");
      numberCriteria.classList.add("text-success"); // Add green color
    }

    if (!validCriteria) {
      // Password does not meet the criteria, display an error message or perform necessary actions
    }
  }

  onSubmit() {
    const form = document.getElementById("myForm") as HTMLFormElement;
    const form2 = document.getElementById("myForm2") as HTMLFormElement;
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    const socialBx = document.querySelector(".social-bx") as HTMLElement;

    if (form && form2 && submitBtn && socialBx) {
      // Show the spinner
      const buttonSpinner = document.getElementById("buttonSpinner");
      if (buttonSpinner) {
        buttonSpinner.classList.remove("d-none");
      }

      // Disable the form button
      submitBtn.disabled = true;

      // Hide the element with the "social-bx" class
      socialBx.style.display = "none";

      // Simulating form submission delay (remove this in your actual code)
      setTimeout(function () {
        // After form submission is complete
        // Hide the spinner
        if (buttonSpinner) {
          buttonSpinner.classList.add("d-none");
        }

        // Hide the first form and show the second form
        form.classList.add("d-none");
        form2.classList.remove("d-none");
      }, 2000); // Change the delay time according to your requirements
    }
  }
  adjustHeight() {
    const loginPage = document.querySelector('.login-page') as HTMLElement;

    if (loginPage) {
      const contentHeight = loginPage.scrollHeight;

      if (contentHeight > window.innerHeight) {
        loginPage.style.height = 'auto';
      } else {
        loginPage.style.height = '100vh';
      }
    }
  }
}