import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order/order.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  id: string;

  ngOnInit(): void { }

  submit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.orderService.createOrder(this.id, sessionStorage.getItem('userId'), '1').subscribe((data: Product) => {
      this.product = data;
      console.log('Response from getProductByProductId = ' + JSON.stringify(this.product));
      this.router.navigate(['/dashboard']);
    },
      (error: any) => {
        console.log('Error = ' + error['status']);
      });
  }
}
