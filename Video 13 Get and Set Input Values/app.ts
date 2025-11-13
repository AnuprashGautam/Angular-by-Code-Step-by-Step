import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  email=""

  getEmail(value:string)
  {
    this.email=value;
  }

  setEmail()
  {
    this.email="adam@test.com";
  }

  password=""

  getPassword(event:Event)
  {
    this.password=(event.target as HTMLInputElement).value;
  }

  setPassword()
  {
    this.password="12345678";
  }
}
