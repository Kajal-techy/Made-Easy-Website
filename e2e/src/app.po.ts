import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');;
  }

  getLoginPageName(): Promise<string> {
    return element(by.xpath('/html/body/app-root/app-login-page/div/mat-card/form/div/div[1]/h1/b')).getText() as Promise<string>;
  }

  sendUserName(){
    element(by.xpath('//*[@id="mat-input-0"]')).sendKeys("Heta");
  }

  sendPassword() {
    element(by.xpath('//*[@id="mat-input-1"]')).sendKeys("123456");
  }

  clickOnLoginBtn() {
    element(by.cssContainingText('.mat-flat-button', 'Sign in')).click();
  }
}
