import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';


export class InformtaionCheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get locators() {
        return {
            firstName: this.page.locator('[data-test="firstName"]'),
            lastName: this.page.locator('[data-test="lastName"]'),
            postalCode: this.page.locator('[data-test="postalCode"]'),
           continueButton: this.page.locator('[data-test="continue"]'),
           firstNameError: this.page.locator('[data-test="error"]')
           
        };
    }

    async fillFirstname(firstName: string) {
        await this.locators.firstName.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.locators.lastName.fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.locators.postalCode.fill(postalCode);
    }

    async proceedToContinue() {
        await this.locators.continueButton.click();
    }

    async assertFirstNameRequired() {
     await expect(this.locators.firstNameError).toContainText('First Name is required');
} 

}