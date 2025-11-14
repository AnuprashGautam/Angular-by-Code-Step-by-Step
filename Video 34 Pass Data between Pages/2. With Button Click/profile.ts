import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string | null="";

  constructor(private route:ActivatedRoute){}

  ngOnInit()
  {
    // let name=this.route.snapshot.paramMap.get('name');
    // console.log(name);
    // this.username=name;

    this.route.queryParams.subscribe(params=>
     {
       console.log(params['name'])
       this.username=params['name']
     }
    );
  }
}
