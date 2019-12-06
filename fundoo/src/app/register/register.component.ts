import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';

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
    private userservice:UserserviceService) { }

  ngOnInit() {
    this.Registerform=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      password:new FormControl(''),
      
    })
  }

  Register(RegistarionForm:NgForm){
     
    
   this.userservice.registration (this.Registerform.value).subscribe(response=>{
        this.snackbar.open('Registration Successfull...check your email for verification', 'Ok', {duration: 3000});

       },
       (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'all field is required in correct format', {duration: 3000});

    }

    );
    
  }
  
}
