const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs : true,
    baseUrl: 'https://www.carnival.com/',
    "viewportWidth": 1440,
    "viewportHeight": 900,
  },
});
