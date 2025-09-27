import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";

export class CheckDataPage extends BasePage {
  constructor() {
    super("/dashboard");
    this.name = customElement('[data-testid="name"]');
    this.surname = customElement('[data-testid="surname"]');
    this.email = customElement('[data-testid="email"]');
    this.phone = customElement('[data-testid="phone"]');
    this.age = customElement('[data-testid="age"]');
    this.accountNumber = customElement('[data-testid="account-number"]');
    this.accountBalance = customElement('[data-testid="account-balance"]');
    this.accountType = customElement('[data-testid="account-type"]');
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

  accountCheck(startBalance, type) {
    this.accountBalance.containsText(startBalance);
    this.accountType.containsText(type);
  }
}
