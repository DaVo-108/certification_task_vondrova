import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";

export class RegisterPage extends BasePage {
  constructor() {
    super("/register");
    this.usernameInput = customElement("[data-testid='username-input']");
    this.passwordInput = customElement("[data-testid='password-input']");
    this.emailInput = customElement("[data-testid='email-input']");
    this.registrButton = customElement("[data-testid='submit-button']");
    this.welcomeMessage = customElement("[data-testid='success-message']");
    this.thisloginButton = customElement("[data-testid='submit-button']");
  }

  openRegistrUrl() {
    this.registrUrl.click();
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }
  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }
  typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  clickRegistr() {
    this.registrButton.click();
    return this;
  }

  welcomeMessageIsVisible() {
    this.welcomeMessage.isVisible();
  }

  clickLogin() {
    thisloginButton().click();
    return new DashboardPage();
  }
}
