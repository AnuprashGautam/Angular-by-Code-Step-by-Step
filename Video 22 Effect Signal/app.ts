import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  num=signal(0);
  isEven=true;

  incrementNumber()
  {
    this.num.set(this.num()+1);
  }

  constructor()
  {
    effect(()=>{
      if(this.num()%2==0)
      {
        this.isEven=true;
      }else{
        this.isEven=false;
      }
    });
  }
}
