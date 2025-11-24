import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, input, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{

  
  title:string="Title"
  @Input()
  receivedMessage:string='';

  @ContentChild('temp') projectedcontent: any;
  @ViewChild('viewPara') viewPara: any;

  constructor()
  {
    console.log("User compoent is being initialized.");
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // console.log("ngOnChanges called.");

    // console.log(changes);
    // console.log(this.projectedcontent);
}

  ngOnInit(): void {
    //   console.log("this is ngOnInit method.");
    // console.log(this.projectedcontent);

  }

  ngDoCheck()
  {
    // console.log("ngDoCheck called.");
  }

  ngAfterContentInit(): void {
      // console.log("ngAfterContentOnInit is called.")
      // console.log(this.projectedcontent.nativeElement);
  }


  ngAfterContentChecked()
  {
    console.log("ngAfterConterntChecked hook called.");
    console.log(this.viewPara);
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit method of user component called.");
    console.log(this.viewPara.nativeElement)
    
  }

  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked method of user component called.");
    console.log(this.viewPara.nativeElement)
  }

  ngOnDestroy()
  {
    console.log("ngOnDestroy method of user component called.");
  }
}
