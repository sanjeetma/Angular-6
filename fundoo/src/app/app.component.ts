import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


const newLocal = '/register';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundoo';

  constructor(private http:HttpClient){}
  ngOnInit(){
    
   
  }
}
