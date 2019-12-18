import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

takeNote:FormGroup;
open : boolean;

private httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient,
    private snackbar:MatSnackBar,
    private noteservice:NoteService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
this.takeNote=new FormGroup({
title:new FormControl(),
desc:new FormControl(),
})
  }
close(){
  this.open=false
  if((this.takeNote.controls.title.value!==null) && (this.takeNote.controls.desc.value!==null)){
  this.noteservice.createNote(this.takeNote.value).subscribe(response => {
    console.log(response);
    this.snackbar.open('note created','',{duration:3000});
    this.router.navigateByUrl('dashboard');
  });
}
this.snackbar.open('can not create note wih null value','',{duration:3000});
this.router.navigateByUrl('dashboard');
}
openNotes(){
  this.open =true; 
}
}
