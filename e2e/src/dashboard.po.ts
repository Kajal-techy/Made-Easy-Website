import { browser, by, element } from 'protractor';

export class DashBoardPage {

  navigateTo() {
    return browser.get('/dashboard');;
  }
}