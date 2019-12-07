import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute,ParamMap } from '@angular/router';

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
      password:new FormControl(),
      
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token= params.get('token');
  });
    
  }
  submit(){
    this.userservice.resetpassword(this.resetform.value,this.token).subscribe(
      ()=>{
        this.snackbar.open('password Updated', 'Ok', {duration: 3000});
        console.log(this.token);
      },
      (error: any) => {
        console.log( error);
        this.snackbar.open(error.error.description, 'Invalid Email', {duration: 3000});
      }
    )
  }

}
