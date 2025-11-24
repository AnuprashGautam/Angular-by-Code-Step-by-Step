import { Component, computed, Directive, effect, ElementRef, Signal, signal, WritableSignal, forwardRef, AfterViewInit, AfterContentChecked, AfterViewChecked, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { User } from './user/user';
import { CurrecyConvertorPipe } from './pipe/currecy-convertor-pipe';
import { ProductService } from './service/product-service';
import { Products } from './service/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, ReactiveFormsModule, NgIf, FormsModule, User, CommonModule, CurrecyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('learn-angular');
  
  productData:any;
  
  constructor(private products:Products)
  {}

  ngOnInit(): void {
      this.products.getProductList().subscribe((data:any) =>{
        console.log(data);
        
        this.productData=data.products;
      }
      )
  }
}