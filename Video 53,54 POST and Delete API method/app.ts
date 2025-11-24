import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef, AfterViewInit, AfterContentChecked, AfterViewChecked, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { User } from './interfaces/User'
import { CurrecyConvertorPipe } from './pipe/currecy-convertor-pipe';
import { Users } from './service/users';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf, FormsModule, CommonModule, CurrecyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('learn-angular');
  
  users:User[]=[];

  constructor(private usersService:Users){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.usersService.getUsers().subscribe((data:User[])=>{
        console.log(data);
    
        this.users=data;
      })
  }

  addUser(user:User)
  {
    this.usersService.saveUser(user).subscribe((data:User)=>{
      console.log(data);

      if(data)
      {
        this.getUsers();
      }
    })
  }

  deleteUser(id:string)
  {
    this.usersService.deleteUser(id).subscribe((data:User)=>{
      console.log(data);


      if(data)
      {
        this.getUsers();
      }
      
    });
  }
}