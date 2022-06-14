import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products : Product[] = [
    {
      id: '1',
      name: 'Random Product 1',
      image: 'https://picsum.photos/200',
      price: 60
    },
    {
      id: '2',
      name: 'Random Product 2',
      image: 'https://picsum.photos/200',
      price: 290
    },
    {
      id: '3',
      name: 'Random Product 3',
      image: 'https://picsum.photos/200',
      price: 100
    }
  ]

  myShoppingCart: Product[] = [];
  total: Number = 0;

  onAddedToShoppingCart(product: Product): void {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
