import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  task=""

  tasklist: {id:number, task:string}[]=[]

  addTask()
  {
    if(this.task!="")
    {
      this.tasklist.push(
        {
          id:this.tasklist.length+1,
          task:this.task
        }
      );
      this.task="";
    }
  }

  deleteTask(id:number)
  {
    this.tasklist=this.tasklist.filter((task)=>task.id!=id);
  }
}