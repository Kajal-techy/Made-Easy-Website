import { User } from './User';
import { ProductStatus } from './ProductStatus';
import { PaymentMode } from './PaymentMode';

export class Product {

    id: string;
    name: string;
    image: string;
    price: string;
    unit: string;
    description: string;
    rating: string;
    reviews: string[];
    status: ProductStatus;
    paymentMode: PaymentMode[];
    sellerDetails: User;

    constructor(name: string, image: string, price: string, unit: string, description: string,
        status: ProductStatus, paymentMode: PaymentMode[], sellerDetails: User) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.unit = unit;
        this.description = description;
        this.status = status;
        this.paymentMode = paymentMode;
        this.sellerDetails = sellerDetails;
    }
}
