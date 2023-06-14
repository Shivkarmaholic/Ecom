import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: undefined | ProductModel[];
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) {

  }


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(paramMap => {
      const query = paramMap.get('query');
      query && this.searchQuery(query);
    });
  }

  searchQuery(query: string): void {
    this.product.searchProduct(query).subscribe(
      (data: any) => {
        this.searchResult = data;
      }
    );
  }
  
}

