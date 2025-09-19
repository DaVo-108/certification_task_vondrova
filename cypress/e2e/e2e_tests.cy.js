import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../page-objects/register_page";
import { AccountApi } from "../api/tegb/account_api";

describe("Certification: first E2E Test", () => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.email();
  const startBalance = 10000;
  const type = "Test";

  it("Registration to teg#b", () => {
    new LoginPage().visit().clickRegister();
    new RegisterPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible();
    new LoginPage().typeUsername(username).typePassword(password).clickLogin();

    cy.intercept("/tegb/accounts").as("account_api");
    new AccountApi().addAccount(startBalance, type).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});
