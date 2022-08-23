import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AImageComponent } from './visual/a-image/a-image.component';
import { AButtonComponent } from './visual/controls/a-button/a-button.component';
import { AInputTextComponent } from './forms/a-input-text/a-input-text.component';



@NgModule({
  declarations: [
    AInputTextComponent,
    AImageComponent,
    AButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AInputTextComponent,
    AImageComponent,
    AButtonComponent
  ]
})
export class AtomsSharedModule { }
