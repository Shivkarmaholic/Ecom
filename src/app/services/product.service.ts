import { Injectable} from '@angular/core';
import { AddProductModel,ProductModel } from '../data-type';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private router:Router) { }

  // addProduct(data: AddProductModel){
  //   return this.http.post("http://localhost:3000/products",data,{observe :'response'}).subscribe(
  //     (result:any)=>{               
  //       this.router.navigate(['seller-product-list']);  
  //       console.log("product-service "+ result);
  //     }) 
  // }

  addProduct(data: AddProductModel){
    return this.http.post("http://localhost:3000/products",data);
  }

  getAllProducts(){
    return this.http.get<ProductModel>("http://localhost:3000/products");
  }
}
