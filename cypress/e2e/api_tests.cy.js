import { UserApi } from "../api/tegb/userApi";
import { faker } from "@faker-js/faker";

describe("Send API Tests", () => {
  let username;
  let password;
  let email;

  it("Login ", () => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log("Username: " + username);
    cy.log("Password: " + password);
    cy.log("Email: " + email);

    new UserApi().register(username, password, email);
    new UserApi().login(username, password).then((response) => {
      const accessToken = response.body.access_token;
      expect(response.status).to.equal(201);
      expect(response.body.access_token).to.be.ok;
    });
  });
});
