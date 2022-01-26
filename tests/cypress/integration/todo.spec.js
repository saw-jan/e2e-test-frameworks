describe("Search", () => {
  it("Search me on github", () => {
    cy.visit("/");
    // add todo
    cy.get("#input-todo")
      .type("Learn programming{enter}")
      .get("#txt0")
      .should("include.text", "Learn programming");
    // add todo with button
    cy.get("#input-todo")
      .type("Practice OOP")
      .get("#add")
      .click()
      .get("#txt1")
      .should("include.text", "Practice OOP");
    // mark as done
    cy.get("#l0 input[type='checkbox']")
      .click()
      .get("#txt0")
      .should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)");
    // delete todo
    cy.get("#btn0")
      .invoke("show")
      .click()
      .get(".list")
      .contains("Learn programming")
      .should("not.exist")
      .get(".list")
      .contains("Practice OOP")
      .should("be.visible");
  });
});
