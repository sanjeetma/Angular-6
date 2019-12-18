import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiurl=environment.url;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  constructor(private http:HttpClient) { }

  createNote(note: any):Observable<any>{
    console.log(note);
    return this.http.post<any>(this.apiurl+'notes/create',note,{ headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }
    deleteNote(id:any):Observable<any>{
      return this.http.get<any>(this.apiurl+'notes/delete/'+id);
    }
    getNote(note:any):Observable<any>{
      return this.http.get<any>(this.apiurl+'notes/');

    }
    getAllNotes():Observable<any>{
      return this.http.get<any>(this.apiurl+'notes?id='+localStorage.getItem('token'));
    }
}
