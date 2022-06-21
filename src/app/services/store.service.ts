import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]); // Primero el BehaviorSubject para crear el observable

  myCart$ = this.myCart.asObservable(); // creación del observable
  
  addProduct(product:Product):void {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart():Product[] {
    return this.myShoppingCart;
  }

  getTotal():number {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
