import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResult: undefined | ProductModel[];
  constructor(private route: Router, private product: ProductService) {

  }

  logOut() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }


  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(val: string) {
    this.route.navigate([`search/${val}`]);
  }

  redirectToDetails(id: string) {
    this.route.navigate(['/details/' + id]);
  }


  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe(
        (result) => {
          this.searchResult = result;
        }
      )
    }
  }

  userLogOut() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  ngOnInit(): void {

    this.route.events.subscribe(
      (val: any) => {
        if (val.url) {
          if (localStorage.getItem('seller') && val.url.includes('seller')) {
            this.menuType = 'seller';
            if (localStorage.getItem('seller')) {
              let sellerStore = localStorage.getItem('seller');
              let sellerData = sellerStore && JSON.parse(sellerStore)[0];
              this.sellerName = sellerData.name;
            }
          }
          else if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore)[0];
            this.userName = userData.name;

            this.menuType = 'user';
          }
          else {
            this.menuType = 'default';
          }
        }
      }

    )
  }

}
