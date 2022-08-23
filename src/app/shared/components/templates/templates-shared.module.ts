import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TLoginComponent } from './t-login/t-login.component';



@NgModule({
  declarations: [TLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TLoginComponent
  ]
})
export class TemplatesSharedModule { }
