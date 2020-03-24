import { Injectable } from '@angular/core';
import { Shopping } from '../models/shopping';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private products: Shopping[] = new Array();

  constructor(private router: Router) {
    this.products.push({
      name: 'Huevo',
      description: '1kg',
      check: false
    });

    this.products.push({
      name: 'Tortillas',
      description: '1/2kg',
      check: false
    });

    this.products.push({
      name: 'Cereal',
      description: '2 cajas',
      check: true
    });

    this.products.push({
      name: 'Pan',
      description: '6 Piezas',
      check: false
    });

    this.products.push({
      name: 'Aceite',
      description: '3L',
      check: true
    });
  }

  check(position: number) {
    this.products[position].check = !this.products[position].check;
  }

  viewDetails(product: Shopping) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(product)
      }
    };

    this.router.navigate(['/details'], extras);
  }

  newProduct(product: Shopping) {
    this.products.push(product);
  }

  getProducts(): Shopping[] {
    return this.products;
  }
}
