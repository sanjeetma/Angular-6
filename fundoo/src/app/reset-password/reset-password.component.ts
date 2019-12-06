import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetform:FormGroup;
  constructor(private http:HttpClient,private snackbar:MatSnackBar,
    private userservice:UserserviceService) { }

  ngOnInit() {
    this.resetform=new FormGroup({
      password:new FormControl()
    });
  }
  submit(){
    this.userservice.resetpassword(this.resetform.value).subscribe(
      ()=>{
        this.snackbar.open('check your email for updatepassword', 'Ok', {duration: 3000});
      },
      (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'Invalid Email', {duration: 3000});
      }
    )
  }

}
