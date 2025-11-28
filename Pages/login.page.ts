import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  get locators() {
    return {
      usernameInput:  this.page.locator('[data-test="username"]'),
      passwordInput: this.page.locator('[data-test="password"]'),
      loginButton: this.page.locator('[data-test="login-button"]'),
      errorMessage: this.page.locator('[data-test="error"]'),
    };
  }

  // Actions
  async login(email: string, password: string) {
    await this.locators.usernameInput.fill(email);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }

 
  async assertLoginFailure() {
    await expect(this.locators.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  }
}