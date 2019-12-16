import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private updateSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.updateSubscription = interval(1000).subscribe(
      
    
);
  }

}
