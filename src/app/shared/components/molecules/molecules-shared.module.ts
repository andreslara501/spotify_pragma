import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAccountButtonsComponent } from './accounts/m-account-buttons/m-account-buttons.component';



@NgModule({
  declarations: [MAccountButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [MAccountButtonsComponent]
})
export class MoleculesSharedModule { }
