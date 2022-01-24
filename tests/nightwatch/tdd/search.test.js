test("Search me on github", async (page) => {
  await page
    .url(page.launchUrl)
    .updateValue("input[name='q']", "saw-jan", page.Keys.ENTER)
    .click("a[href='/search?q=saw-jan&type=users'].menu-item")
    .click("a[href='/saw-jan'].mr-1");

  // assertion
  await page.expect.element(".p-name").text.to.equal("Saw-jan Gurung");
  await page.expect.element(".p-nickname").text.to.equal("saw-jan");
});
