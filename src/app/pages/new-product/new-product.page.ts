import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../../services/shopping.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: ShoppingService, private fb: FormBuilder, private toast: ToastController) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['']
    });
  }

  saveNewProduct() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newProduct({
        name: this.myForm.get('name').value,
        description: this.myForm.get('description').value,
        check: false
      });

      this.showToast('El producto se guardó exitosamente :3');
    } else {
      this.showToast('Debe de llenar por lo menos el campo "Nombre"');
    }
  }

  async showToast(text: string) {
    const toast = await this.toast.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
