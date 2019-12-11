import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note;
  tittle: any;
  desc: any;
  noteform: FormGroup;
  constructor(private noteservice: NoteService,
    private httpclient: HttpClient,
    private snackbar: MatSnackBar,
    private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.noteform = new FormGroup({
      tittle: new FormControl(''),
      desc: new FormControl('')
    });
    this.noteservice.getAllNotes()
      .subscribe((response: any) => {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          this.note = response[i];
          console.log(this.note.tittle)
          console.log(this.note.description)
          this.tittle = this.note.tittle;
          this.desc = this.note.description;
          this.noteform = new FormGroup({
            tittle: new FormControl(''),
            desc: new FormControl('')
          });
        }
      })
  }
  close() {
    this.noteservice.createNote(this.noteform).subscribe(response => {
      this.snackbar.open('note created');
    });
  }

}
