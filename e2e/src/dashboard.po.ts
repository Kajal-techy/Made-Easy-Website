import { browser, by, element } from 'protractor';

export class DashBoardPage {

  navigateTo()  {
    return browser.get('/dashboard');
  }

  getCarousal(): any {
      return element(by.css('.owl-stage-outer')) ;
  }

  getPriceLable(): any {
    return element(by.xpath('//*[@name="price"]'));
  }

  clickOnProduct() {
    element(by.xpath('//*[@name="price"]')).click();
  }
}
