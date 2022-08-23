import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OLoginComponent } from './login/o-login/o-login.component';



@NgModule({
  declarations: [OLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [OLoginComponent]
})
export class OrganismsSharedModule { }
