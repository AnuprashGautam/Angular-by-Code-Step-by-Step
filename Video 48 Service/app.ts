import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef, AfterViewInit, AfterContentChecked, AfterViewChecked, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { User } from './user/user';
import { CurrecyConvertorPipe } from './pipe/currecy-convertor-pipe';
import { ProductService } from './service/product-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf, FormsModule, User, CommonModule, CurrecyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('learn-angular');
  
  productData:{
    name:string,
    brand:string,
    price:string
  }[]|undefined;

  constructor(private productService: ProductService){}

  // loadSerngviceData(){
  //   this.productData=this.productService.getProductData();
  // }

  ngOnInit(){
    this.productData=this.productService.getProductData();
  }
}