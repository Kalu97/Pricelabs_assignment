const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      chromeWebSecurity: false;
      defaultCommandTimeout: 12000;
      experimentalOriginDependencies: true;
      return config
      // implement node event listeners here
    },
  },
});
