import { test } from '@playwright/test';
import { SauceDemoFlows } from './../Flows/SauceDemoFlows';
import { CartItem, CheckoutUserInfo } from './../types/checkout.types';

test.describe('SauceDemo Checkout Tests', () => {

  test('Happy path  Full Successful Checkout', async ({ page }) => {
    const flows = new SauceDemoFlows(page);

    await flows.login('standard_user', 'secret_sauce');
    await flows.sortItemsLowToHigh();

    await flows.addItemToCart('Sauce Labs Onesie');
    await flows.addItemToCart('Sauce Labs Bike Light');

    await flows.openCart();

    await flows.cartPage.expectInventoryLength(2);
    await flows.cartPage.expectItemVisible('Sauce Labs Onesie');
    await flows.cartPage.expectItemVisible('Sauce Labs Bike Light');

    await flows.proceedToCheckout();

    const userInfo: CheckoutUserInfo = {
      firstName: 'Takwa',
      lastName: 'Jaouadi',
      postalCode: '1074'
    };

    await flows.fillCheckoutInformation(userInfo);

    const items: CartItem[] = [
      { name: 'Sauce Labs Onesie', price: 7.99, quantity: 1 },
      { name: 'Sauce Labs Bike Light', price: 9.99, quantity: 1 }
    ];

    await flows.overviewCheckoutPage.verifyTotals(items);

    await flows.finishCheckout();
    await flows.overviewCheckoutPage.verifyCheckoutCompleteMessage();
  });


/**************************************/


  test('Invalid Login', async ({ page }) => {
    const flows = new SauceDemoFlows(page);
    await flows.login('invalid_user', 'wrong_password');
  });



/**************************************/

  test('Missing First Name', async ({ page }) => {
  const flows = new SauceDemoFlows(page);


  await flows.login('standard_user', 'secret_sauce');

  await flows.addItemToCart('Sauce Labs Onesie');
  await flows.addItemToCart('Sauce Labs Bike Light');

  await flows.openCart();


  await flows.cartPage.expectInventoryLength(2);
  await flows.cartPage.expectItemVisible('Sauce Labs Onesie');
  await flows.cartPage.expectItemVisible('Sauce Labs Bike Light');

  await flows.proceedToCheckout();

 
  await flows.infoCheckoutPage.fillLastName('Jaouadi');
  await flows.infoCheckoutPage.fillPostalCode('1074');
  await flows.infoCheckoutPage.proceedToContinue();

  await flows.infoCheckoutPage.assertFirstNameRequired();
});


});
