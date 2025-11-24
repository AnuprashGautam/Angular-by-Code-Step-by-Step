import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { User } from './user/user';
import { CurrecyConvertorPipe } from './pipe/currecy-convertor-pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf, FormsModule, User, CommonModule, CurrecyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, AfterViewChecked{
  protected readonly title = signal('learn-angular');
  
  sentMessage:string='';
  toDestroy: boolean=false;

  
  constructor()
  {
    console.log("App compoent is being initialized.");
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit method of app component called.");
    
  }

  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked method of app component called.");
    
  }

  onBtnClicked(inputEl: HTMLInputElement)
  {
    this.sentMessage=inputEl.value;
  }

  destroyComponent()
  {
    this.toDestroy= !this.toDestroy;
  }
}