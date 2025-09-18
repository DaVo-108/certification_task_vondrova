import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";
import { RegisterPage } from "../page-objects/register_page";

describe("Certification: first E2E Test", () => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.email();

  it("Registration to teg#b", () => {
    new LoginPage().visit().clickRegister();
    new RegisterPage()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegistr()
      .welcomeMessageIsVisible();
    new LoginPage().typeUsername(username).typePassword(password).clickLogin();
  });
});
