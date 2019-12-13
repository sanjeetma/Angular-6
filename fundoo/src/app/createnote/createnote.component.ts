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
  this.noteservice.createNote(this.takeNote.value).subscribe(response => {
    console.log(response);
    this.snackbar.open('note created');
  });
}

}
