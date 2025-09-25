import { UserApi } from "../api/tegb/userApi";
import accountsData from "../fixtures/new_accounts_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { RegisterPage } from "../page-objects/register_page";
import { CheckDataPage } from "../page-objects/check_data_page";

// poslední dva testy padají na 500, což může být způsobeno příliš vysokými hodnotami zůstatku, které bylo v zadání

describe("Data Driven Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    new LoginPage().visit().clickRegister();
    new RegisterPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible();
    new LoginPage().typeUsername(username).typePassword(password).clickLogin();
  });
  accountsData.forEach((accountData) => {
    it(`DDT: Create account - ${accountData.description}`, () => {
      const startBalance = accountData.startBalance;
      const type = accountData.type;
      const userApi = new UserApi();

      userApi.login(username, password).then((response) => {
        const token = response.body.access_token;

        cy.intercept("/tegb/accounts").as("accounts_api");
        userApi.addAccount(startBalance, type, token).then((response) => {
          const token = response.body.access_token;
          cy.wait("@accounts_api");
        });
      });
      new CheckDataPage()
        .accountNumberIsVisible()
        .accountCheck(startBalance, type);
    });
  });
});
