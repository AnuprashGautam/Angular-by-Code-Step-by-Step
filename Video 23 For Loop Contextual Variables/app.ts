import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  students: {id:number; name:string}[]=
  [
    {id: 0, name:'Name'},
    {id:101, name:"Anuprash"},
    {id:102, name:"Anirudh"},
    {id:103, name:"Rachit"},
    {id:104, name:"Raxit"},
    {id:105, name:"Rahul"},
    {id:106, name:"Rakesh"},
    {id:107, name:"Rakul"},
    {id:108, name:"Anamika"},
    {id:109, name:"Tina"},
    {id:110, name:"Radha"}
  ]
}