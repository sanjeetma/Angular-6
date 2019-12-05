import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor(private router:Router,private http:HttpClient,private snackbar:MatSnackBar) { 

    
  }

  ngOnInit() {
    this.loginform=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }
  register(){
    this.router.navigate(['/register']);
  }
  forgetpassword(){
    this.router.navigate(['/forgetpassword']);
  }
   Login(form:NgForm){
    if (this.loginform.invalid) {
      return;
    }
     this.http.post('http://localhost:8080/users/login',this.loginform.value,this.httpOptions).subscribe(
       () =>{
        this.snackbar.open('login successfull', 'Ok', {duration: 3000});

       },
       (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'email or password is Invalid', {duration: 3000});
        });
     
     
     
   
     
   }
   
  }
