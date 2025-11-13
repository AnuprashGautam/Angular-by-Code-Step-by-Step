import { Component, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  // Datatype of container value
  signalValue1 = signal<number>(100);
  signalValue2 = signal<number | String>("Anuprash");

  // Datatype of signal itself
  signalValue3:WritableSignal<number | String> = signal<number | String>("Anuprash");
  signalValue4:WritableSignal<number | String> = signal(100);

  constructor() {
    // Using set()
    this.signalValue4.set(1000);

    // Using update()
    this.signalValue4.update(2000);
  }
}
