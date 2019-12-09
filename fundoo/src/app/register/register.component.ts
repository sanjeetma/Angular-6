import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Registerform:FormGroup;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
  
  constructor(private http:HttpClient,
    private snackbar:MatSnackBar,
    private userservice:UserserviceService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.Registerform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.required,Validators.minLength(5)]),
      
    })
  }

  Register(RegistarionForm:NgForm){
     
    
   this.userservice.registration (this.Registerform.value).subscribe(response=>{
        this.snackbar.open('Registration Successfull...check your email for verification', 'Ok', {duration: 3000});
        this.router.navigateByUrl('login');

       },
       (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'all field is required in correct format', {duration: 3000});

    }
   
    );
    

  }
  
}
