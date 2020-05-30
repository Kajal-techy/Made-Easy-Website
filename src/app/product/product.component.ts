import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product/product.service';
import { Product } from '../model/product';
import { User } from '../model/User';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  id: string;
  product: Product;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id, true).subscribe((data: Product) => {
      this.product = data;
      console.log("Response from getProductByProductId = " + JSON.stringify(this.product));
    },
      (error: any) => {
        console.log("Error = " + error['status']);
      });
  }
}
