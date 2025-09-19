export class AccountApi {
  constructor() {
    this.apiUrl = Cypress.env("tegb_api_url");
  }

  addAccount(startBalance, type) {
    return cy.request({
      method: "POST",
      url: this.apiUrl + "/accounts/create",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhcmluYSBUZXN0Iiwic3ViIjoxNzgwMCwiaWF0IjoxNzU4MzEwMzczLCJleHAiOjE3NTgzMTM5NzN9.yeTbcnrzI034yYTALLpn3g6KbDkIUxlfF_RsSVavb6M",
        "Content-Type": "application/json",
      },
      body: {
        startBalance,
        type,
      },
    });
  }
}
