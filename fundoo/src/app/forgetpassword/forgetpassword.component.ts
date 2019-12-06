import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  updateform:FormGroup;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor(private http:HttpClient,private snackbar:MatSnackBar,
    private userservice:UserserviceService,private router:Router) { }

  ngOnInit() {
    this.updateform=new FormGroup({
      email:new FormControl(''),
    })
  }
submit(){
this.userservice.forgetpassword(this.updateform.value)
.subscribe(
  ()=>{
  this.snackbar.open('check your email for updatepassword', 'Ok', {duration: 3000});
},
(error: any) => {
  console.log( error);
  this.snackbar.open(error.error.description, 'Invalid Email', {duration: 3000});
}
);

this.router.navigateByUrl('resetPassword/:token');
}
}

