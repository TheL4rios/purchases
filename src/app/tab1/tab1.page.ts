import { Component } from '@angular/core';
import { Shopping } from '../models/shopping';
import { ShoppingService } from '../services/shopping.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  products: Shopping[] = [];
  search: string;

  constructor(private shoppingService: ShoppingService, private router: Router, private alert: AlertController) {
    this.products = this.shoppingService.getProducts();
  }

  viewDetails(product: Shopping) {
    this.shoppingService.viewDetails(product);
  }

  operation(position: number, ev) {
    const side = ev.detail.side;

    if (side === 'start') {
      this.shoppingService.check(position);
    } else {
      this.showAlert(position);
    }
  }

  async showAlert(pos: number) {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar ' + this.products[pos].name + '?',
      buttons: [{
        text: 'No',
        handler: () => {}
      }, {
        text: 'Si',
        handler: () => {
          this.shoppingService.deleteProduct(pos);
        }
      }]
    });
    await al.present();
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
