import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  profileFormGroup= new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(3), Validators.max(20)]),
      email: new FormControl('', [Validators.required, Validators.min(5), Validators.max(50), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')])
    }
  )

  get name()
  {
    return this.profileFormGroup.get('name');
  }

  get password()
  {
    return this.profileFormGroup.get('password');
  }

  get email()
  {
    return this.profileFormGroup.get('email');
  }

  submitForm()
  {
    console.log(this.profileFormGroup.value);
  }

  setDefaultValues()
  {
    this.profileFormGroup.setValue({
      name:'Anuprash',
      password:'123',
      email:'anuprash@test.com'
    })
  }

}