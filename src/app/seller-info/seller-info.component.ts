import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
