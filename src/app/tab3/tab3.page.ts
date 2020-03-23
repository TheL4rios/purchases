import { Component } from '@angular/core';
import { Shopping } from '../models/shopping';
import { ShoppingService } from '../services/shopping.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  products: Shopping[] = [];

  constructor(private shoppingService: ShoppingService, private router: Router) {
    this.products = this.shoppingService.getProducts();
  }

  check(position: number) {
    this.shoppingService.check(position);
  }

  viewDetails(product: Shopping) {
    this.shoppingService.viewDetails(product);
  }

}
