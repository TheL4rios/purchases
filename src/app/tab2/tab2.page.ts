import { Component } from '@angular/core';
import { Shopping } from '../models/shopping';
import { ShoppingService } from '../services/shopping.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  products: Shopping[] = [];

  constructor(private shoppingService: ShoppingService, private router: Router) {
    this.products = this.shoppingService.getProducts();
  }

  viewDetails(product: Shopping) {
    this.shoppingService.viewDetails(product);
  }

  check(position: number) {
    this.shoppingService.check(position);
  }

}
