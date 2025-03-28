const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html reports
  e2e: {
    reporter: 'cypress-mochawesome-reporter', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    this.screenshotOnRunFailure=true;
    require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },
});

