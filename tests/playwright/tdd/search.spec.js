const { test, expect } = require("@playwright/test");

test("TODO user journey", async ({ page }) => {
  // cannot chained
  await page.goto("/");

  // add todo
  await page.fill("#input-todo", "Learn programming");
  await page.keyboard.press("Enter");
  await expect(page.locator("#txt0")).toHaveText("Learn programming");
  // add todo with button
  await page.fill("#input-todo", "Practice OOP");
  await page.click("#add");
  await expect(page.locator("#txt1")).toHaveText("Practice OOP");
  // mark as done
  await page.click("#l0 input[type='checkbox']");
  const style = await page.locator("#txt0").getAttribute("style");
  expect(style.includes("text-decoration: line-through;")).toBeTruthy();
  // delete todo
  await page.locator("#l0").hover();
  await page.click("#btn0");
  await expect(
    page.locator("//span[text()='Learn programming']")
  ).not.toBeVisible();
  await expect(page.locator("//span[text()='Practice OOP']")).toBeVisible();
});
