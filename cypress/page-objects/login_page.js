import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { RegisterPage } from "./register_page";

export class LoginPage extends BasePage {
  constructor() {
    super("/");
    //this.url = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = customElement("[data-testid='username-input']");
    this.passwordInput = customElement("[data-testid='password-input']");
    this.loginButton = customElement("[data-testid='submit-button']");
    this.registerAnchor = customElement("[data-testid='register-button']");
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
    return new DashboardPage();
  }

  clickRegister() {
    this.registerAnchor.click();
    return new RegisterPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }
}
