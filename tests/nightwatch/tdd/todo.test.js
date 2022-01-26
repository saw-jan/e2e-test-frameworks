test("TODO user journey", async (page) => {
  await page.url(page.launchUrl);
  // add todo
  await page
    .updateValue("#input-todo", ["Learn programming", page.Keys.ENTER])
    .expect.element("#txt0")
    .text.to.equal("Learn programming");
  // add todo with button
  await page
    .updateValue("#input-todo", "Practice OOP")
    .click("#add")
    .expect.element("#txt1")
    .text.to.equal("Practice OOP");
  // mark as done
  await page
    .click("#l0 input[type='checkbox']")
    .expect.element("#txt0")
    .to.have.css("text-decoration")
    .which.contain("line-through");
  // delete todo
  await page
    .moveToElement("#l0", 0, 0)
    .click("#btn0")
    .useXpath()
    .expect.element("//span[text()='Learn programming']").to.not.be.present;
  await page.expect.element("//span[text()='Practice OOP']").to.be.visible;
});
