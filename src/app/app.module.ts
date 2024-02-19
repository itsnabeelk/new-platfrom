import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { RegisterAccountComponent } from './pages/login/register-account/register-account.component';
import { LottieModule } from 'ngx-lottie';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchHomeComponent } from './component/search-home/search-home.component';
import { SucessModalComponent } from './component/sucess-modal/sucess-modal.component';
import { CategoriesSliderComponent } from './component/categories-slider/categories-slider.component';
import { RecentArticlesComponent } from './component/recent-articles/recent-articles.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { CareerInnerComponent } from './pages/career/career-inner/career-inner.component';
import { TranslateComponent } from './pages/translate/translate.component';
import { TranslatePackageComponent } from './pages/translate/translate-package/translate-package.component';
import { ContactComponent } from './contact/contact.component';
import { AdribotComponent } from './pages/adribot/adribot.component';
export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    RegisterAccountComponent,
    SearchHomeComponent,
    SucessModalComponent,
    CategoriesSliderComponent,
    RecentArticlesComponent,
    AboutComponent,
    ServicesComponent,
    CareerComponent,
    CareerInnerComponent,
    TranslateComponent,
    TranslatePackageComponent,
    ContactComponent,
    AdribotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
