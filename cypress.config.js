const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      tegb_login_url: "https://tegb-frontend-88542200c6db.herokuapp.com/",
      tegb_registr_url:
        "https://tegb-frontend-88542200c6db.herokuapp.com/register",
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
  },
});
