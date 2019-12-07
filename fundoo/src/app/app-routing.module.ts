import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { componentFactoryName } from '@angular/compiler';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



const routes: Routes = [
  {
    path:'' , component:LoginComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'register' , component:RegisterComponent
  },
  {
    path: 'forgetpassword' ,component:ForgetpasswordComponent
  },
  {
    path:'resetPassword/:token',component:ResetPasswordComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'register';
}

