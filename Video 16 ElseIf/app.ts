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

  count=100;

  changeColor(value:number)
  {
    this.count=value;
  }

  changeColorOnInput(event:Event)
  {
    this.count=Number((event.target as HTMLInputElement).value);
  }
}
