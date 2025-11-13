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

  // Length Signal
  length:WritableSignal<number>=signal(10);

  // Changing the length
  changeLength(val:string)
  {
    if(val=='inc')
    {
      this.length.update((v)=>v+1);
    }else{
      this.length.update((v)=>v-1);
    }
  }

  // Breadth Signal
  breadth:WritableSignal<number>=signal(10);

  // Changing the breadth
  changeBreadth(val:string)
  {
    if(val=='inc')
    {
      this.breadth.update((v)=>v+1);
    }else{
      this.breadth.update((v)=>v-1);
    }
  }

  // Area computed signal depending on length and breadth
  area= computed(()=>this.length()*this.breadth());

}
