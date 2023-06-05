import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {

  productList: ProductModel[] = [];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit = faEdit;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: any) {
    this.product.deleteProduct(id).subscribe(
      (result) => {
        if (result) {
          this.productMessage = "Product Deleted Successfully"
        }
      }
    )
    this.list();
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
  editProduct(id: any) { }

  list() {
    this.product.getAllProducts().subscribe(
      (result: any) => {
        this.productList = result;
      }
    )
  }
}
