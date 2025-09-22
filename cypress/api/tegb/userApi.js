export class UserApi {
  constructor() {
    this.apiUrl = Cypress.env("tegb_api_url");
  }

  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "tegb/register",
      body: {
        username,
        password,
        email,
      },
    });
  }

  loginAfterRegistration(username, password) {
    return cy.request({
      method: "POST",
      url: this.apiUrl,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "tegb/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username,
        password,
      },
    });
  }

  addAccount(startBalance, type, token) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "tegb/accounts/create",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: {
        startBalance,
        type,
      },
    });
  }
}
