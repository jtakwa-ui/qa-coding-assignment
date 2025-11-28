import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class OverviewCheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get locators() {
        return {
            subtotalLabel: this.page.locator('[data-test="subtotal-label"]'),
            taxLabel: this.page.locator('[data-test="tax-label"]'),
            totalLabel: this.page.locator('[data-test="total-label"]'),
            itemQuantity: this.page.locator('[data-test="item-quantity"]'),
            finishButton: this.page.locator('[data-test="finish"]'),
            checkoutCompleteContainer: this.page.locator('[data-test="checkout-complete-container"]'),
        };
    }

    /**
     * Verifies that the displayed totals match the expected calculation
     * Total = Item total + Tax
     * Item total = Σ (price × quantity)
     * Tax = Item total × 8%
     * @param items Array of objects { price: number, quantity: number }
     */
    async verifyTotals(items: { price: number, quantity: number }[]) {
        // Calculate item total
        const itemTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = parseFloat((itemTotal * 0.08).toFixed(2));
        const total = parseFloat((itemTotal + tax).toFixed(2));

        // Verify the labels on the page
        await expect(this.locators.subtotalLabel).toContainText(`Item total: $${itemTotal.toFixed(2)}`);
        await expect(this.locators.taxLabel).toContainText(`Tax: $${tax.toFixed(2)}`);
        await expect(this.locators.totalLabel).toContainText(`Total: $${total.toFixed(2)}`);
    }



    // Click the finish button to complete checkout
    async finishCheckout() {
        await this.locators.finishButton.click();
    }

    // Verify the checkout complete message is displayed
    async verifyCheckoutCompleteMessage() {
        await expect(this.locators.checkoutCompleteContainer).toContainText(
            'Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home'
        );
    }
}
