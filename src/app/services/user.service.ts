import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../user'


const httpOptions= {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://62431f84b6734894c15b41ad.mockapi.io/accounts'

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  deleteTask(user:User):Observable<User>{
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url)
  }
  addUsers(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user,httpOptions)
  }
}
