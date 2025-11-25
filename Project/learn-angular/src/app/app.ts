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
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');
  
}