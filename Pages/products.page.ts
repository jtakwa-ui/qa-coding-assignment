import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';


export class ProductsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get locators() {
        return {
            sortIcon: this.page.locator('[data-test="product-sort-container"]'),
            addToCartButton: (itemName: string): Locator => {
                // Normalize item name: lowercase + replace spaces with '-'
                const normalizedName = itemName.toLowerCase().replace(/\s+/g, '-');
                // Build locator string
                const selector = `[data-test="add-to-cart-${normalizedName}"]`;
                return this.page.locator(selector);
            },
            cartBadgeIcon: this.page.locator('[data-test="shopping-cart-link"]'),
        };
    }

    async applySorting(direction: string) {
        await this.locators.sortIcon.selectOption(direction);
    }

    async addItem(itemName: string) {
        await this.locators.addToCartButton(itemName).click();
    }

    async selectCartBadge() {
        await this.locators.cartBadgeIcon.click();
    }


}