import {Page, Locator} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly addToCartBackpackButton: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async addBackpackToCart() {
        await this.addToCartBackpackButton.click();
    }
    async goToCart() {
        await this.cartLink.click();
    }
}