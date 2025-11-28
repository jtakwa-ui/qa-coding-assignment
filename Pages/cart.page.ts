import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';


export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get locators() {
        return {
            itemName: (itemName: string): Locator => {
                return this.page.locator('.inventory_item_name', { hasText: itemName });
            },
            inventoryItems: this.page.locator('.inventory_item_name'),
            checkoutButton: this.page.locator('[data-test="checkout"]'),
        };
    }

    async expectItemVisible(itemName: string) {
        const itemLocator = this.locators.itemName(itemName);
        await expect(itemLocator).toBeVisible();
    }

    async expectInventoryLength(expectedCount: number) {
        await expect(this.locators.inventoryItems).toHaveCount(expectedCount);
    }
    async proceedToCheckout() {
        await this.locators.checkoutButton.click();
    }

}
