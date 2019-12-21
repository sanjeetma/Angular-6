import { Component, OnInit,Input } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.css'],
  
 
})
export class DisplaynotesComponent implements OnInit {
 @Input()notes;
  constructor() { }
  
  ngOnInit() {
   
  }
  
}
