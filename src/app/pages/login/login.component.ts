import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  showPassword: boolean = false;
  emailValid: boolean = false;
  passwordValid: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateEmail() {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const emailFeedback = document.getElementById("emailFeedback");

    if (emailInput && emailFeedback) {
      const email = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        this.emailValid = true;
        emailFeedback.classList.remove("text-danger");
        emailFeedback.classList.add("text-success");
        emailFeedback.innerHTML = "<i class='bi bi-check-circle-fill'></i> Email is valid";
      } else {
        this.emailValid = false;
        emailFeedback.classList.remove("text-success");
        emailFeedback.classList.add("text-danger");
        emailFeedback.innerHTML = "<i class='bi bi-exclamation-circle-fill'></i> Invalid email format";
      }
    }
  }

  validatePassword() {
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const passwordFeedback = document.getElementById("passwordFeedback");

    if (passwordInput && passwordFeedback) {
      const password = passwordInput.value;

      if (password.length >= 8) {
        this.passwordValid = true;
        passwordFeedback.classList.remove("text-danger");
        passwordFeedback.classList.add("text-success");
        passwordFeedback.innerHTML = "<i class='bi bi-check-circle-fill'></i> Password is valid";
      } else {
        this.passwordValid = false;
        passwordFeedback.classList.remove("text-success");
        passwordFeedback.classList.add("text-danger");
        passwordFeedback.innerHTML = "<i class='bi bi-exclamation-circle-fill'></i> Password must be at least 8 characters long";
      }
    }
  }

  onSubmit() {
    if (!this.emailValid || !this.passwordValid) {
      // Email or password is not valid, display an error message or perform necessary actions
      return;
    }

    const form = document.getElementById("myForm") as HTMLFormElement;
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

    if (form && submitBtn) {
      // Rest of the form submission logic
    }
  }

  ngAfterViewInit(): void {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    if (emailInput) {
      emailInput.addEventListener("input", this.validateEmail.bind(this));
    }

    if (passwordInput) {
      passwordInput.addEventListener("input", this.validatePassword.bind(this));
    }
    // image-height
    this.adjustHeight();
    this.renderer.listen('window', 'DOMContentLoaded', this.adjustHeight.bind(this));
    this.renderer.listen('window', 'resize', this.adjustHeight.bind(this));
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