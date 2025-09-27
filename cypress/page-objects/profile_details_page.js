import { BasePage } from "../common/base_page";
import { customElement } from "../helpers/custom_element";
import { ProfilePage } from "./profile_page";

export class ProfileDetailsPage extends BasePage {
  constructor() {
    super("/dashboard");
    this.editProfileButton = customElement(
      "[data-testid='toggle-edit-profile-button']"
    );
    this.firstNameInput = customElement("[data-testid='chage-name-input']");
    this.lastNameInput = customElement("[data-testid='chage-surname-input']");
    this.emailInput = customElement("[data-testid='chage-email-input']");
    this.phoneInput = customElement("[data-testid='chage-phone-input']");
    this.ageInput = customElement("[data-testid='chage-age-input']");
    this.saveButton = customElement("[data-testid='save-changes-button']");
  }

  clickEditProfile() {
    this.editProfileButton.click();
    return this;
  }

  typeFirstName(firstName) {
    this.firstNameInput.type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastNameInput.type(lastName);
    return this;
  }

  typeEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  typePhone(phone) {
    this.phoneInput.type(phone);
    return this;
  }

  typeAge(age) {
    this.ageInput.type(age);
    return this;
  }

  clickSave() {
    this.saveButton.click();
    cy.wait("@profile_api");
    return new ProfilePage();
  }
}
