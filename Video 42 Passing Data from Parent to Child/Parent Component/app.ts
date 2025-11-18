import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { User } from './user/user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf, FormsModule, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  userName:string="Anuprash Sharma"

  onNameChange(val:string)
  {
    this.userName=val;
  }
}