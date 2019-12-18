import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
noteList:[]
  constructor(private noteservice:NoteService) { }

  ngOnInit() {
    this.noteservice.getAllNotesArchieve()
      .subscribe((response)=>{
        this.noteList=response;
        console.log(response);
      })

}
}
