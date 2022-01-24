const { test, expect } = require("@playwright/test");

test("Search me on github", async ({ page }) => {
  // cannot chained
  await page.goto("/");
  await page.fill("input[name='q']", "saw-jan");
  await page.keyboard.press("Enter");
  await page.click("a[href='/search?q=saw-jan&type=users'].menu-item");
  await page.click("a[href='/saw-jan'].mr-1");

  // assertion
  await expect(page.locator(".p-name")).toHaveText("Saw-jan Gurung");
  await expect(page.locator(".p-nickname")).toHaveText("saw-jan");
});
