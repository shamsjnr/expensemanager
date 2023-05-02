import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetComponent } from './sweet/sweet.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'euphoria', component:SweetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
