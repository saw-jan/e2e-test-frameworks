const { devices } = require("@playwright/test");
const HEADLESS = process.env.HEADLESS === "true";

const config = {
  use: {
    headless: HEADLESS,
    baseURL: "http://localhost:3000",
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
