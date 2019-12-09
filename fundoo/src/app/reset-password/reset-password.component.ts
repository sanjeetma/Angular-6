import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetform:FormGroup;
  token:string;
  
  constructor(private http:HttpClient,private snackbar:MatSnackBar,
    private userservice:UserserviceService,private route: ActivatedRoute) {
      this.token = this.route.snapshot.paramMap.get("token");
     }

  ngOnInit() {
    this.resetform=new FormGroup({
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      ConfirmPassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
  
      
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token= params.get('token');
  });
    
  }
  submit(){
    if(this.resetform.controls.password.value===this.resetform.controls.ConfirmPassword.value){
      console.log(this.resetform.controls.password.value);
      console.log(this.resetform.controls.ConfirmPassword.value);

    this.userservice.resetpassword(this.resetform.value,this.token).subscribe(
      (response)=>{
        this.snackbar.open('password Updated', 'Ok', {duration: 3000});
       
        localStorage.setItem('token',this.token);

      
      },
      (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'Invalid Email', {duration: 3000});
      }
    )
  
     }
    
      this.snackbar.open('passwordMismatch', 'Ok', {duration: 3000});
      
  }
  

}
