import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('should complete checkout successfully with valid information', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);


    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('Jean', 'D', '12345');
    await checkoutPage.finishCheckout();

    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
});