import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
noteList:[]
  constructor(private noteservice:NoteService,
    private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.noteservice.getAllNotesArchieve()
      .subscribe((response)=>{
        this.noteList=response;
        console.log(response);
      })

}
Archieve(id: any) {
  this.noteservice.Archieve(id).subscribe((response) => {
    console.log(response);
    console.log("id=====" + id);
    this.snackbar.open(response.message, '', { duration: 3000 })
  },
    (error: any) => {
      this.snackbar.open('note is note present at this index', '', { duration: 3000 })
    });
}
}
