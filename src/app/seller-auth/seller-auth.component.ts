import { Component,OnInit} from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router';
import {SignUp,Login} from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router)
  {}

  showLogin=false;
  authError:String='';
  ngOnInit():void{
    this.seller.reloadSeller();
  }

  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data);
    
  }

  logIn(data: Login): void {    
    this.authError='';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe(
      (error)=>{
        if(error){
          this.authError="Email or Password is Incorrect";
        }
      }
    )
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false
    this.authError='';
  }
 
}
