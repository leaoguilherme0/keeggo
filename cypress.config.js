const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const path = require("path");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:3000",
    supportFile: false,
    screenshotOnRunFailure: false
  },
  env: {
    "cypress-cucumber-preprocessor": {
      stepDefinitions: "cypress/support/step_definitions/**/*.{js,ts}"
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "cypress/support"),
    },
  },
});