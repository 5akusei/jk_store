import { Component, OnInit } from '@angular/core';
// models
import { Product } from '../../models/product.model';
// services
import { StoreService } from '../../services/store.service';
import { ProductRequestsService } from '../../services/product-requests.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private storeService:StoreService,
    private productRequestsService:ProductRequestsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productRequestsService.getAllProducts().subscribe(data => this.products=data);
  }

  products : Product[] = []

  myShoppingCart: Product[] = [];
  total: Number = 0;

  onAddedToShoppingCart(product: Product): void {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(this.myShoppingCart);
    console.log(this.total);
  }
}
