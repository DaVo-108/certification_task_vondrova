import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";
import { ProfileDetailsPage } from "./profile_details_page";

export class DashboardPage extends BasePage {
  constructor() {
    super("/dashboard");

    this.logo = customElement('[data-testid="logo-img"]');
    this.headerTitle = customElement(".app-title");
    this.logoutButton = customElement(".logout-link");

    this.domuAnchor = customElement("ul > :nth-child(1)");
    this.uctyAnchor = customElement("ul > :nth-child(2)");
    this.transakceAnchor = customElement("ul > :nth-child(3)");
    this.podporaAnchor = customElement("ul > :nth-child(4)");

    this.detailsProfileTitle = customElement(
      '[data-testid="profile-details-title"]'
    );
    this.nameTitle = customElement('[data-testid="name"]');
    this.surnameTitle = customElement('[data-testid="surname"]');
    this.emailTitle = customElement('[data-testid="email"]');
    this.phoneTitle = customElement('[data-testid="phone"]');
    this.ageTitle = customElement('[data-testid="age"]');
    this.editProfileButton = customElement(
      '[data-testid="toggle-edit-profile-button"]'
    );
    this.detailsProfileForm = customElement('[data-testid="account-summary"]');

    this.accountTitle = customElement('[data-testid="accounts-title"]');
    this.accountNumberHeading = customElement(
      '[data-testid="account-number-heading"]'
    );
    this.accountBalanceHeading = customElement(
      '[data-testid="account-balance-heading"]'
    );
    this.accountTypeHeading = customElement(
      '[data-testid="account-type-heading"]'
    );
    this.addAccountButton = customElement(".account-action");

    this.loginButton = customElement("[data-testid='submit-button']");
  }

  logoIsVisible() {
    this.logo.isVisible();
    return this;
  }
  loginButtonIsVisible() {
    this.loginButton.isVisible();
    return new LoginPage();
  }

  headerTitleHaveText(text) {
    this.headerTitle.haveText(text);
    return this;
  }

  clickEditProfileButton() {
    this.editProfileButton.click();
    return new ProfileDetailsPage();
  }
  detailsProfileFormIsVisible() {
    this.detailsProfileForm.isVisible();
    return new ProfileDetailsPage();
  }

  clickLogoutButton() {
    this.logoutButton.click();
    return new LoginPage();
  }

  nameContainsText(firstName) {
    this.name.containsText(firstName);
    return this;
  }

  surnameContainsText(lastName) {
    this.surname.containsText(lastName);
    return this;
  }

  emailContainsText(email) {
    this.email.containsText(email);
    return this;
  }

  phoneContainsText(phone) {
    this.phone.containsText(phone);
    return this;
  }

  ageContainText(age) {
    this.age.containsText(age);
    return this;
  }

  accountNumberIsVisible() {
    this.accountNumber.isVisible();
    return this;
  }

  accountBalanceContainsText(balance) {
    this.accountBalance.containsText(balance);
    return this;
  }

  accountTypeContainsText(type) {
    this.accountType.containsText(type);
    return this;
  }
}
