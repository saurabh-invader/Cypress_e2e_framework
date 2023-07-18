import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "ioceso",
  screenshotOnRunFailure: true,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: "Test Demo Report",
    embeddedScreenshots: true,
    html: true,
    // generate intermediate JSON reports
    json: false,
  },
  env: {
    db: {
      host: "localhost",
      user: "root",
      password: "",
      database: "cypress_test",
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
      return require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
