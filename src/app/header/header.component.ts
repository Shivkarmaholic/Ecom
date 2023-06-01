import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:String='default';
  constructor(private route:Router)
  {

  }

  logOut(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  ngOnInit():void{
    
    this.route.events.subscribe(
      (val:any)=>{
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller'))
          {
            console.warn("In Seller Area");
            this.menuType='seller';
          }
          else{
            console.warn("OutSide Seller");
            this.menuType='default';

          }
        }
      }
      
    )
  }

}
