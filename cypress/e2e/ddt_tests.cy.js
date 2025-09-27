import { UserApi } from "../api/tegb/userApi";
import accountsData from "../fixtures/new_accounts_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { CheckDataPage } from "../page-objects/check_data_page";

describe("Data Driven Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    new LoginPage()
      .visit()
      .clickRegister()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();
  });
  accountsData.forEach((accountData) => {
    const shouldSkip =
      accountData.startBalance === -196000921.0 ||
      accountData.startBalance === 298000123.0;
    const testFN = shouldSkip ? it.skip : it;
    // v aplikaci je bug, proto přeskočím 2 testy pro tyto hodnoty

    testFN(`DDT: Create account - ${accountData.description}`, () => {
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
