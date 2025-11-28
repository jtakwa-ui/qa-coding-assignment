import { Page } from '@playwright/test';
import { LoginPage } from './../Pages/login.page';
import { ProductsPage } from './../Pages/products.page';
import { CartPage } from './../Pages/cart.page';
import { InformtaionCheckoutPage } from '../Pages/InformationCheckout.page';
import { OverviewCheckoutPage } from './../Pages/overViewCheckout.page';

import { CheckoutUserInfo } from '../types/checkout.types';

export class SauceDemoFlows {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  infoCheckoutPage: InformtaionCheckoutPage;
  overviewCheckoutPage: OverviewCheckoutPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
    this.infoCheckoutPage = new InformtaionCheckoutPage(page);
    this.overviewCheckoutPage = new OverviewCheckoutPage(page);
  }

  async login(username: string, password: string) {
    await this.loginPage.goto('/');
    await this.loginPage.login(username, password);
  }

  async sortItemsLowToHigh() {
    await this.productsPage.applySorting('lohi');
  }

  async addItemToCart(itemName: string) {
    await this.productsPage.addItem(itemName);
  }

  async openCart() {
    await this.productsPage.selectCartBadge();
  }

  async proceedToCheckout() {
    await this.cartPage.proceedToCheckout();
  }

  async fillCheckoutInformation(user: CheckoutUserInfo) {
    await this.infoCheckoutPage.fillFirstname(user.firstName);
    await this.infoCheckoutPage.fillLastName(user.lastName);
    await this.infoCheckoutPage.fillPostalCode(user.postalCode);
    await this.infoCheckoutPage.proceedToContinue();
  }

  async finishCheckout() {
    await this.overviewCheckoutPage.finishCheckout();
  }
}
