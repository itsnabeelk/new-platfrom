import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAccountComponent } from './pages/login/register-account/register-account.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { SucessModalComponent } from './component/sucess-modal/sucess-modal.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { CareerInnerComponent } from './pages/career/career-inner/career-inner.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { TranslatePackageComponent } from './pages/translate/translate-package/translate-package.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "register-account",
    component: RegisterAccountComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "sucess-modal",
    component: SucessModalComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "career",
    component: CareerComponent
  },
  {
    path: "career-inner",
    component: CareerInnerComponent
  },
  {
    path: "translate",
    component: TranslateComponent
  },
  {
    path: "translate-package",
    component: TranslatePackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
