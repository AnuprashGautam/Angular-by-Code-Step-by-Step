import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  name=new FormControl("John Doe")
  password=new FormControl("12345678")

  showValues()
  {
    console.log(this.name.value + "---"+ this.password.value);
  }

  setDefaultValues()
  {
    this.name.setValue("Default Name");
    this.password.setValue("Default Password")
  }

}