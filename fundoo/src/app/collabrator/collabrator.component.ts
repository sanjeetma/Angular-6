import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.css']
})
export class CollabratorComponent implements OnInit {
  collabrator:FormGroup;
  constructor() { }

  ngOnInit() {
this.collabrator=new FormGroup({
email:new FormControl('')
})
  }
  collabrate()
{

}}
