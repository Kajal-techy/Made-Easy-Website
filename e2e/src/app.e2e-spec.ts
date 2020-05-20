import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Made Easy Website title', () => {
    page.navigateTo();
    browser.getTitle().then(function(title) {
    expect(title).toEqual('MadeEasyWebsite');
    });
  });

  it('should display a login page', () => {
    page.navigateTo();
    expect(page.getLoginPageName()).toEqual("Login");
    })

  it('should login into the application', () => {
    page.navigateTo();
    page.sendUserName();
    page.sendPassword();
    page.clickOnLoginBtn();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/dashboard");
  })
});
