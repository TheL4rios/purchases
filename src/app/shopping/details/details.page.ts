import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shopping } from '../../models/shopping';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product: Shopping;

  constructor(private activateRouted: ActivatedRoute, private router: Router) {
    this.activateRouted.queryParams.subscribe(
      params => {
        this.product = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

}
