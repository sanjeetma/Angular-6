import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { componentFactoryName } from '@angular/compiler';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component';
import { CollabratorComponent } from './collabrator/collabrator.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { ColorComponent } from './color/color.component';



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
  
  {
    path:'dashboard',component:DashboardComponent,children:[
      {
        path:'getAllArchived',component:ArchieveComponent
      },
      //  {
      //     path:'',component:NoteComponent
      //  }
    ]
     
  },
  {
    path:'getAllArchived',component:ArchieveComponent
  },
  {
    path:'notes',component:NoteComponent
    
  },
  {
    path:"collabrate", component:CollabratorComponent
  },
  {
    path:"color",component:ColorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'register';
}

