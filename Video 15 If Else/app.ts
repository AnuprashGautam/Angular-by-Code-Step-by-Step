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

  firstDiv=true;

  hide()
  {
    this.firstDiv=false;
  }

  show()
  {
    this.firstDiv=true;
  }

  toggle()
  {
    this.firstDiv=!this.firstDiv;
  }

  secondDiv=true;

  toggleSecondDiv()
  {
    this.secondDiv=!this.secondDiv;
  }
}
