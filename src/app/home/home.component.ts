import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts: undefined | ProductModel[];
  trendyProducts: undefined | ProductModel[];

  constructor(private product: ProductService) {

  }

  ngOnInit(): void {

    this.product.popularProducts().subscribe(
      (data: any) => {
        this.popularProducts = data;
      }
    );

    this.product.trendyProducts().subscribe(
      (data: any) => {
        this.trendyProducts = data;
      }
    );
  }
}
