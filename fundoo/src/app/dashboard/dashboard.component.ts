import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token:string
  labels:[];
  private updateSubscription: Subscription;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
this.http.get("http://localhost:8080/labels",{ headers: new HttpHeaders().set('token', localStorage.getItem('token')) }).
subscribe((response:any)=>{
  this.labels=response;
})
    
  }
signout(){
this.router.navigateByUrl('login');
localStorage.clear();
}
refresh(){
  window.location.reload();
}
back(){
  this.router.navigateByUrl('dashboard');
}

}
