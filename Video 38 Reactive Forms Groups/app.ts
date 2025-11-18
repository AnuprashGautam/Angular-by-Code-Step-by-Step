import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  profileFormGroup= new FormGroup(
    {
      name: new FormControl('John Doe'),
      password: new FormControl('12345678'),
      email: new FormControl('john@doe.com')
    }
  )

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