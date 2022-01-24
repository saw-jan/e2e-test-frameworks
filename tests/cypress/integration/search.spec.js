describe("Search", () => {
  it("Search me on github", () => {
    cy.visit("/");
    cy.get("input[name='q']").type("saw-jan{enter}");
    cy.get("a[href='/search?q=saw-jan&type=users'].menu-item").click();
    cy.get("a[href='/saw-jan'].mr-1").click();

    // assertion
    cy.get(".p-name").should("include.text", "Saw-jan Gurung");
    cy.get(".p-nickname").should("include.text", "saw-jan");
  });
});
