import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular');

  employees=['Anuprash','Anirudh', 'Rachit', 'Rahul', 'Rakesh'];

  getEmployee(name:string)
  {
    console.log(name);
  }

  students=[
    {name:'Ankit',age:23, email:'ankit@test.com'},
    {name:'Anmol',age:22, email:'anmol@test.com'},
    {name:'Radha',age:22, email:'radha@test.com'},
    {name:'Rinku',age:21, email:'rinku@test.com'},
    {name:'Riya',age:20, email:'riya@test.com'},
    {name:'Roshni',age:23, email:'roshni@test.com'},
  ];

  getStudent(student:object)
  {
    console.log(student);
  }
}
