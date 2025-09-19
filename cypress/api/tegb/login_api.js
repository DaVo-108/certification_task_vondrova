export class LoginApi {
  constructor() {
    this.apiUrl = Cypress.env("tegb_api_url");
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    });
  }
}
