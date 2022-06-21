import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myShoppingCart: Product[] = [];
  
  addProduct(product:Product):void {
    this.myShoppingCart.push(product);
  }

  getShoppingCart():Product[] {
    return this.myShoppingCart;
  }

  getTotal():number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
