import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('should redirect to inventory page when login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('should display an error message when username is invalid', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalid_user', 'secret_sauce');

  await expect(loginPage.errorMessage).toBeVisible();
});

test('should display an error message when username and password are blank', async ({ page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');

    await expect(loginPage.errorMessage).toBeVisible();
});