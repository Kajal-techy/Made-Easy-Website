import { Address } from './Address';

export class User {

    id: String;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    address: Address;

    constructor(id: String, userName: string, firstName?: string, lastName?: string, password?: string, address?: Address) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.address = address;
    }
}