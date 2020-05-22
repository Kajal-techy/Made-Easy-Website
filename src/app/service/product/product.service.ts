import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { SessionService } from 'src/app/service/angular-service/session.service';
import { Product } from 'src/app/model/product';
import { SessionInfo } from 'src/app/model/sessionInfo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8095/api/products";
  sessionInfo: SessionInfo;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  public async getAllProducts() {
    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.sessionService.getSessionInfo().token);
    return await this.httpClient.get(`${this.url}`, {headers:header}).toPromise();
  }

  public async getProductById(userId: string, sellerDetail: boolean = false) {

    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.sessionService.getSessionInfo().token);
    return await this.httpClient.get(`${this.url}/${userId}?sellerDetail=${sellerDetail}`, {headers:header}).toPromise();
  }

  public async createProduct(product: Product) {
    let header = new HttpHeaders().set("Authorization",'Bearer ' + this.sessionService.getSessionInfo().token);
    return await this.httpClient.post(`${this.url}`, product, {headers:header}).toPromise();
  }
}
