import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];

  mySlideImages = ["tomato.jpg", "lemon.jpg", "orange.jpg", "onion.jpg", "chocolate.jpg"];

  mySlideOptions = {
    items: 1, dots: false, nav: false, autoplay: 6000, loop: true,
    autoplayHoverPause: true, autoplayTimeout: 1000,
    slideSpeed: 3000,
    paginationSpeed: 5000,
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.productService.getAllProducts().then((data: Product[]) => {
      this.products = data;
    }, (error: any) => {
      console.log("Error = " + error['status']);
    });
  }
  public onCardClick(id: any) {
    console.log("Product Response after click event1 = " + JSON.stringify(id));
    this.router.navigate([`/product/${id}`]);
  }
}
