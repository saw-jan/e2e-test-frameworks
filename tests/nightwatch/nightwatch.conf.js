const HEADLESS = process.env.HEADLESS === "true";
const chromeArgs = ["window-size=1280,720"];
HEADLESS ? chromeArgs.push("headless") : null;

module.exports = {
  src_folders: ["./tests/nightwatch/tdd"],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require("chromedriver").path,
  },

  test_settings: {
    default: {
      launch_url: "http://localhost:3000",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: [...chromeArgs],
        },
      },
    },
  },
};
