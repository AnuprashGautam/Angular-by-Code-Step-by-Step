import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http:HttpClient){}

  url:string="http://localhost:3000/users";

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }

  saveUser(user:User):Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  deleteUser(id:string):Observable<User>
  {
    return this.http.delete<User>(this.url+"/"+id);
  }
}
