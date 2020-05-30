import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { SessionService } from 'src/app/service/angular-service/session.service';
import { Product } from 'src/app/model/product';
import { SessionInfo } from 'src/app/model/sessionInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8095/api/products";
  sessionInfo: SessionInfo;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  public getAllProducts(): Observable<any> {
    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.sessionService.getSessionInfo().token);
    return this.httpClient.get(`${this.url}`, {headers:header});
  }

  public getProductById(userId: string, sellerDetail: boolean = false): Observable<any> {

    let header = new HttpHeaders().set(
      "Authorization",
      'Bearer ' + this.sessionService.getSessionInfo().token);
    return this.httpClient.get(`${this.url}/${userId}?sellerDetail=${sellerDetail}`, {headers:header});
  }

  public createProduct(product: Product): Observable<any> {
    let header = new HttpHeaders().set("Authorization",'Bearer ' + this.sessionService.getSessionInfo().token);
    return this.httpClient.post(`${this.url}`, product, {headers:header});
  }
}
