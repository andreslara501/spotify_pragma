import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AInputTextComponent } from './shared/components/atoms/forms/a-input-text/a-input-text.component';
import { AImageComponent } from './shared/components/atoms/visual/a-image/a-image.component';
import { AButtonComponent } from './shared/components/atoms/visual/controls/a-button/a-button.component';
import { MAccountButtonsComponent } from './shared/components/molecules/accounts/m-account-buttons/m-account-buttons.component';
import { OLoginComponent } from './shared/components/organims/login/o-login/o-login.component';
import { LoginComponent } from './shared/components/templates/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AInputTextComponent,
    AImageComponent,
    AButtonComponent,
    MAccountButtonsComponent,
    OLoginComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
