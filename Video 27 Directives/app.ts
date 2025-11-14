import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, forwardRef(() => HighlightDirective)],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');


  user="admin";
  role="admin"

  fruits=['apple', 'banana', 'pineapple', 'orange'];
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{
  constructor(private el:ElementRef)
  {
    el.nativeElement.style.background="yellow";
  }
}