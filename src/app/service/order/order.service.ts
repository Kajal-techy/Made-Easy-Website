import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from 'src/app/service/angular-service/session.service';
import { SessionInfo } from 'src/app/model/sessionInfo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  sessionInfo: SessionInfo;


  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  public createOrder(productId: String, userId: String, quantity: String): Observable<any> {
    const HOSTNAME = 'http://localhost:8095';
    const body = {
      'productId': productId,
      'userId': userId,
      'quantity': quantity
    };

    let header = new HttpHeaders().set('Authorization', 'Bearer ' + this.sessionService.getSessionInfo().token);

    return this.httpClient.post(`${HOSTNAME}/v1/order`, body, { headers: header });
  }
}
