import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private http:HttpClientModule) { }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['/register']);
  }
  login(){
    this.http.post('http://localhost:8080/users/login').
  }
}
