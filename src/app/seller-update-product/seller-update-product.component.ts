import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  UpdateProductMessage: string = "";
  productData: undefined | ProductModel;

  constructor(private route: ActivatedRoute, private product: ProductService) {

  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe(
      (data: any) => {
        this.productData = data;
      }
    )
  }

  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe(
      (data: ProductModel) => {
        if (data) {
          this.UpdateProductMessage = "Product Updated Successfully";
        }
      }
    )
    setTimeout(() => {
      this.UpdateProductMessage = '';
    }, 3000);


  }
}
