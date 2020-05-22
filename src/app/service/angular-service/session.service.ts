import { Injectable } from '@angular/core';
import { SessionInfo } from 'src/app/model/sessionInfo'

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  sessionInfo: SessionInfo;

  constructor() { }

  public getSessionInfo(): SessionInfo {
    if (!this.sessionInfo) {
      this.sessionInfo = {};
    }
    if (!this.sessionInfo.token)
      this.sessionInfo.token = sessionStorage.getItem("token");
    if (!this.sessionInfo.userId)
      this.sessionInfo.userId = sessionStorage.getItem("userId");
    if (!this.sessionInfo.userName)
      this.sessionInfo .userName = sessionStorage.getItem("userName");
    return this.sessionInfo;
  }

  public setToken(token: string, userId: string, userName: string): void {
    this.sessionInfo = new SessionInfo(token, userId , userName);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("userName", userName);
  }
}
