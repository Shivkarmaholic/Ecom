import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: undefined | ProductModel;
  productQuantity: number = 1;
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) {

  }

  ngOnInit() {
    let prodId = this.activeRoute.snapshot.paramMap.get('productId');
    prodId && this.product.getProduct(prodId).subscribe(data => {
      this.productDetails = data;
    });





  }
  handleQuantity(val: string) {

    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    }
    else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }

  }
}
