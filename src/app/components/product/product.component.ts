import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '1',
    name: 'Random Product',
    image: 'https://picsum.photos/200',
    price: 100
  }

  constructor() { }

  ngOnInit(): void {
  }

}
