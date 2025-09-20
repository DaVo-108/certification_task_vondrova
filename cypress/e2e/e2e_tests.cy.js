import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../page-objects/register_page";
import { UserApi } from "../api/tegb/userApi";

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

    const userApi = new UserApi();
    userApi.login(username, password).then((response) => {
      const token = response.body.access_token;
      cy.setCookie("access_token", "token");

      cy.intercept("/tegb/accounts").as("accounts_api");
      userApi.addAccount(startBalance, type, token).then((response) => {
        const token = response.body.access_token;
        cy.setCookie("access_token", "token");
        cy.wait("@accounts_api");
      });
    });
  });
});
