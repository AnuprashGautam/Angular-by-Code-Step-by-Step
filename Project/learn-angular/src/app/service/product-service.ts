import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor()
  {
    console.log("Product Service");
  }

  getProductData()
  {
    return [
      {name:"mobile", brand:"Microsoft", price:"10000"},
      {name:"laptop", brand:"Apple", price:"100000"},
      {name:"tv", brand:"LG", price:"10000"}
    ];
  }
}
