const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: 'PID',
  hideXHR: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    async setupNodeEvents(on, config) {
      require('rctf/plugins/index.js')(on, config)
      return config
    },
    baseUrl: 'http://localhost:8080',
    stepDefinitions: 'cypress/support/step_definitions',
    specPattern: [ 'cypress/features/*.feature',
      'redcap_rsvc/*/[ABC]/*/*.feature',
      '!redcap_rsvc/*/[ABC]/*/*REDUNDANT*.feature'
    ],
    testIsolation: false,
    experimentalMemoryManagement: false,
    numTestsKeptInMemory: 50,
    retries: {
      runMode: 2,
      openMode: 0
    },
    video: false,
    videoCompression: false,
    trashAssetsBeforeRuns: true,
    viewportWidth: 1600,
    viewportHeight: 1200,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    requestTimeout: 60000,
    chromeWebSecurity: false,
    scrollBehavior: 'bottom',
    watchForFileChanges: true,
    redirectionLimit: 50
  },
})