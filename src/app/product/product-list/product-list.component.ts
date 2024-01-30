import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = []
  
  constructor(private ProductService : ProductService)
  {

  }
  
  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(data =>
      this.products = data
      );
  }

}
