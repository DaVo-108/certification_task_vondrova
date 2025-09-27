import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";
import { ProfileDetailsPage } from "./profile_details_page";
import { ProfilePage } from "./profile_page";
import { RegisterPage } from "./register_page";

export class LoginPage extends BasePage {
  constructor() {
    super("/");
    cy.intercept(Cypress.env("tegb_login_url")).as("login_api");
    cy.intercept("/tegb/profile").as("profile_api");
    this.usernameInput = customElement("[data-testid='username-input']");
    this.passwordInput = customElement("[data-testid='password-input']");
    this.loginButton = customElement("[data-testid='submit-button']");
    this.registerAnchor = customElement("[data-testid='register-button']");
    this.logoutButton = customElement(".logout-link");
  }

  openTegb() {
    cy.visit(this.url);
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

  clickLogin() {
    this.loginButton.click();
    cy.wait("@login_api");
    cy.wait("@profile_api");
    return new ProfilePage();
  }

  clickRegister() {
    this.registerAnchor.click();
    return new RegisterPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    cy.wait("@profile_api");
    return new ProfileDetailsPage();
  }

  clicklogout() {
    this.logoutButton.click();
    return new BasePage();
  }
}
