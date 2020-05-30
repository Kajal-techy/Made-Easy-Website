import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public authenticateUser(userName: string, password: string): Observable<any> {

    const HOSTNAME = 'http://localhost:8095';
    const body = {
      'userName': userName,
      'password': password
    };

    return this.httpClient.post(`${HOSTNAME}/v1/authenticate`, body);
  }
}
