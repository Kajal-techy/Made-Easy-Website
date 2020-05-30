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

  mySlideImages = ["tv.jpg", "image1.jpg", "image3.jpg"];

  mySlideOptions = {
    items: 1, dots: false, nav: false, autoplay: true, loop: true,
    autoplayHoverPause: true, autoplayTimeout: 5000,
    slideSpeed: 3000,
    paginationSpeed: 5000,
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, (error: any) => {
      console.log("Error = " + error['status']);
    });
  }

  public onCardClick(id: any) {
    console.log("Product Details = " + JSON.stringify(id));
    this.router.navigate([`/product/${id}`]);
  }
}
