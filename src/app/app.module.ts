import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLoginComponent } from './pages/p-login/p-login.component';
import { PSignInComponent } from './pages/p-sign-in/p-sign-in.component';
import { PSignUpComponent } from './pages/p-sign-up/p-sign-up.component';
import { AtomsSharedModule } from './shared/components/atoms/atoms-shared.module';
import { MoleculesSharedModule } from './shared/components/molecules/molecules-shared.module';
import { OrganismsSharedModule } from './shared/components/organims/organisms-shared.module';
import { TemplatesSharedModule } from './shared/components/templates/templates-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PLoginComponent,
    PSignInComponent,
    PSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsSharedModule,
    MoleculesSharedModule,
    OrganismsSharedModule,
    TemplatesSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
