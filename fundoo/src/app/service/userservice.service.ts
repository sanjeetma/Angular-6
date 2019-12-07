import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private apiurl=environment.url;
private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  registration(user: any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.apiurl + 'users/register',user, this.httpOptions);
    }
    
    login(user: any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.apiurl+'users/login',user,this.httpOptions);
    }
    
    resetpassword(user:any,token:any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.apiurl+'users/update-password',user,{ headers: new HttpHeaders().set('token', token) });
    }
   forgetpassword(user:any):Observable<any>{
      console.log(user);
      return this.http.post<any>(this.apiurl+'users/forgetpassword',user,this.httpOptions);
      }
}


