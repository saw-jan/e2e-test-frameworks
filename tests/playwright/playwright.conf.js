const { devices } = require("@playwright/test");

const config = {
  use: {
    headless: true,
    baseURL: "https://github.com",
    channel: "chrome",
  },
  testDir: "./tdd",
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

module.exports = config;
