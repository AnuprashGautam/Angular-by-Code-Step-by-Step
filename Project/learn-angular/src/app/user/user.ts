import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userid="";
  username:string|null=""


  constructor(private route:ActivatedRoute){}

  ngOnInit()
  {
    this.route.params.subscribe(params=>
    {
      console.log(params);
      this.userid=params['id'];
      this.username=params['name'];
    }
    )
  }
}
