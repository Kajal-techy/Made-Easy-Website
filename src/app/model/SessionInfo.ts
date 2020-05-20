export class SessionInfo {

    token?: string;
    userId?: string;
    userName?: string;

    public constructor(token: string, userId: string, userName: string) {
        this.token = token;
        this.userId = userId;
        this.userName = userName;
    }
}