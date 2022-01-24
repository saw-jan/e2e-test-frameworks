module.exports = {
  src_folders: ["./tests/nightwatch/tdd"],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require("chromedriver").path,
  },

  test_settings: {
    default: {
      launch_url: "https://github.com",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["headless", "window-size=1280,720"],
        },
      },
    },
  },
};
