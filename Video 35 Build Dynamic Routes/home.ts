import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  users:{id:number, name:string, age:number, email:string}[]=[
    {
      id:1,
      name:'Anuprash',
      age:22,
      email:'anuprash@gmailcom'
    },
    {
      id:2,
      name:'Anirudh',
      age:21,
      email:'anirudh@gmailcom'
    },
    {
      id:3,
      name:'Rakhi',
      age:22,
      email:'rakhi@gmailcom'
    },
    {
      id:4,
      name:'Roopa',
      age:22,
      email:'roopa@gmailcom'
    },
    {
      id:5,
      name:'Tinu',
      age:22,
      email:'tinu@gmailcom'
    },
    {
      id:6,
      name:'Tomy',
      age:22,
      email:'tomy@gmailcom'
    },
    {
      id:7,
      name:'tanaya',
      age:22,
      email:'tanaya@gmailcom'
    },
    {
      id:8,
      name:'Joseph',
      age:22,
      email:'joseph@gmailcom'
    },
  ]
}
