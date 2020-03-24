import { Component } from '@angular/core';
import { Shopping } from '../models/shopping';
import { ShoppingService } from '../services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

  newProduct(product: Shopping) {
      this.router.navigate(['/new-product']);
  }

}
