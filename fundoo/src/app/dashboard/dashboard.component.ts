import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token:string
  private updateSubscription: Subscription;
  constructor(private router:Router) { }

  ngOnInit() {
    
  }
signout(){
this.router.navigateByUrl('login');
localStorage.clear();
}
refresh(){
  window.location.reload();
}
}
