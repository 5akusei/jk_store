import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  isMenuActive: boolean = false;
  counter: number = 0;

  toggleStateMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

}
