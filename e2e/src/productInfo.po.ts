import { browser, by, element } from 'protractor';

export class ProductInfoPage {

 getProductInfo(): any {
   return element(by.xpath('//*[@class="product_name"]'));
 }

 getBuyBtn(): any {
    return element(by.cssContainingText('.mat-button-base','Buy'));
 }

 getSellerDetails(): any {
    return element(by.css('.seller_details')).getText();
 }
}
