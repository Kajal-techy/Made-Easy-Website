import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { merge, Observable, of as observableOf } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Pagination
  resultsLength = 0;
  pageSize = 5;
  products: Product[];
  loginForm: FormGroup;

  mySlideImages = ['tv.jpg', 'image1.jpg', 'image3.jpg'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  mySlideOptions = {
    items: 1, dots: false, nav: false, autoplay: true, loop: true,
    autoplayHoverPause: true, autoplayTimeout: 5000,
    slideSpeed: 3000,
    paginationSpeed: 5000,
  };

  constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    }, (error: any) => {
      console.log('Error = ' + error['status']);
    });
    this.loginForm = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.productService.searchProducts(this.paginator.pageIndex * this.pageSize,
            this.pageSize, this.loginForm.value.search)
        }),
        map(data => {
          // FIXME: This data should be coming from backend
          this.resultsLength = 6;
          return data;
        }),
        catchError(() => {
          return observableOf([]);
        })
      ).subscribe(data => {
        this.products = data;
      });
  }
  public submit() {
    if (!this.loginForm.valid)
      return;
    this.ngAfterViewInit();
  }

  public onCardClick(id: any) {
    console.log('Product Details = ' + JSON.stringify(id));
    this.router.navigate([`/product/${id}`]);
  }
}
