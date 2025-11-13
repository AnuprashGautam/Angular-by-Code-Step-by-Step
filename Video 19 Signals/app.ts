import { Component, effect, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  normalValue=10;
  signalValue= signal(100);

  constructor()
  {
    effect(()=>{
      // console.log(this.normalValue);
      console.log(this.signalValue());
    })
  }

  updateNormalValue(actn:string)
  {
    if(actn=='inc')
    {
      this.normalValue++;
    }
    if(actn=='dec')
    {
      this.normalValue--;
    }
  }

  updateSignalValue(actn:string)
  {
    if(actn=='inc')
    {
      this.signalValue.set(this.signalValue() + 1);
    }
    if(actn=='dec')
    {
      this.signalValue.set(this.signalValue() - 1);
    }
  }
}
