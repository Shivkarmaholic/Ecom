import { Component,OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductModel} from '../data-type';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {

  productList:ProductModel[]=[];

  constructor(private product:ProductService){}

  ngOnInit():void{
    this.product.getAllProducts().subscribe(
      (result:any)=>{
        this.productList=result;
      }
    )
  }

  deleteProduct(id:any){}
  editProduct(id:any){}

}
