import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PLoginComponent } from './pages/p-login/p-login.component';

const routes: Routes = [
  { path: 'login', component: PLoginComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
