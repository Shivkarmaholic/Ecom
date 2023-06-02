import { Component } from '@angular/core';
import {ProductService} from '../services/product.service';
import {AddProductModel} from '../data-type';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductMessage:string='';
  constructor(private product:ProductService){}

  addProduct(data:AddProductModel):void{
    this.product.addProduct(data).subscribe(
      (result:any)=>{
        if(result){
          this.addProductMessage="Product Added Successfully";
        }
        setTimeout(() => {
          this.addProductMessage='';
        }, 3000); 
      }
    );
    console.log(data);
    }

  


  }
