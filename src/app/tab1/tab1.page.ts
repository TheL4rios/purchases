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
  search: string;

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

  clearSearch(): void {
    this.products = this.shoppingService.getProducts();
  }

  filter(): void {
    this.clearSearch();
    if (this.search && this.search.trim()) {
      this.products = this.products.filter((product) => {
        return ((product.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1) ||
                 product.description.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }

}
