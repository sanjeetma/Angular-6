import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note:Note;
  tittle: any;
  desc: any;
  noteList:[];  
  noteform: FormGroup;
  open:boolean;
  changeText:boolean
  constructor(private noteservice: NoteService,
    private httpclient: HttpClient,
    private snackbar: MatSnackBar,
    private router: ActivatedRoute,
    private route:Router) {
      this.changeText = false;

  }

  ngOnInit() {
    this.noteservice.getAllNotes()
      .subscribe((response: any) => {
        this.noteList=response;
         console.log(this.noteList);
      //   console.log(this.noteList.length)
      //    for (var i = 0; i < response.length; i++) {
      //      this.note = response[i];
          
      //      //console.log(this.noteList);
      //     console.log(this.note.tittle)
      //      console.log(this.note.description)
      //      this.tittle = this.note.tittle;
      //      this.desc = this.note.description;
           
        
      //    }
       }
      );
     
  }
  
  
  delete(id:any){
    this.noteservice.deleteNote(id).subscribe((response)=>{
      console.log(response);
      console.log("id====="+id);
      this.snackbar.open('note is deleted','',{duration:3000})
    },
    (error:any)=>{
this.snackbar.open('note is note present at this index','',{duration:3000})
    });
  }

}
