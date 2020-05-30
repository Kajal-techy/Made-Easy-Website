import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { DashBoardPage } from './dashboard.po';
import { protractor } from 'protractor/built/ptor';
import { ProductInfoPage } from './productInfo.po';

describe('Made Easy Website E2E Testcases', () => {
  let page: AppPage;
  let dashboardPage: DashBoardPage;
  let productInfoPage: ProductInfoPage;
  var expectedWait = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
    dashboardPage = new DashBoardPage();
    productInfoPage = new ProductInfoPage();
  });

  it('should display Made Easy Website title', () => {
    page.navigateTo();
    browser.getTitle().then(function (title) {
      expect(title).toEqual('MadeEasyWebsite');
    });
  });

  it('should display a login page', () => {
    page.navigateTo();
    expect(page.getLoginPageName()).toEqual("Login");
  })

  it('should login into the application', () => {
    let currentURL: string;
    page.navigateTo();
    page.sendUserName();
    page.sendPassword();
    page.clickOnLoginBtn();
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    expect(browser.getCurrentUrl()).toContain('/dashboard');
  })

  /**
   * Dashboard page E2E testcases
   */

  it('Carousal should be present', () => {
    browser.wait(expectedWait.visibilityOf(dashboardPage.getCarousal()), 5000);
   })

  it('verify product should display', () => {
    expect(dashboardPage.getPriceLabel().getText()).toEqual("Price:");
  })

  it('verify product should be clickable and should redirect to product information page', () => {
    expect(dashboardPage.getPriceLabel().clickable);
  })

  it('verify page should redirect to product information page', () => {
    dashboardPage.clickOnProduct();
    expect(browser.getCurrentUrl()).toContain('/product');
  })

  /**
   * Product Information page
   */

  it('verify product details should be present', () => {
    browser.wait(expectedWait.visibilityOf(productInfoPage.getProductInfo()), 100000);
    expect(productInfoPage.getProductInfo().getText());
  })

  it('verify buy button should be present', () => {
    browser.wait(expectedWait.visibilityOf(productInfoPage.getBuyBtn()), 5000);
  })

  it('verify seller details should be present', () => {
    expect(productInfoPage.getSellerDetails()).toEqual("Seller Details")
  })
});
