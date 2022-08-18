import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AInputTextComponent } from './shared/components/atoms/forms/a-input-text/a-input-text.component';
import { AImageComponent } from './shared/components/atoms/visual/a-image/a-image.component';
import { AButtonComponent } from './shared/components/atoms/visual/controls/a-button/a-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AInputTextComponent,
    AImageComponent,
    AButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
