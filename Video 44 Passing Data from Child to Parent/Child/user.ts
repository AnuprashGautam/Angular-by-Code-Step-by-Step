import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  users=[
    'Anuprash',
    'Anirudh',
    'Robert',
    'Rohan',
    'Twinkle',
    'Rohit'
  ];
  
  @Output()
  sendUsers=new EventEmitter<string[]>();


  // ngOnInit()
  // {
  //   this.sendUsers.emit(this.users);
  // }

  sendUsersMethod()
  {
    this.sendUsers.emit(this.users);
  }
}
