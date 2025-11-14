import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  students:{id:number, name:string}[]=[
    {id:1, name:'Anuprash'},
    {id:2, name:'Anirudh'},
    {id:3, name:'Kavita'},
    {id:4, name:'Rinku'},
    {id:5, name:'Rakesh'},
    {id:6, name:'Tinu'},
    {id:7, name:'Rony'}
  ]
}