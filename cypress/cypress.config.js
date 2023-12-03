const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 958,
  viewportHeight: 953,
  e2e: {
    baseUrl: 'http://localhost:2368/ghost',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email_address: 'admin@thesoftwaredesigncompany.com',
    password: 'Contraseña123#'
  }
});
