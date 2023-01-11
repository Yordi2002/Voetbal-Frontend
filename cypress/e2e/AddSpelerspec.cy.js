describe("Spelers", () => {
  it('clicks the link "AddSpelers"', () => {
    cy.visit("http://localhost:3000/AddSpeler");
    cy.get('[name="Naam"]').type("Cristiano Ronaldo");
    cy.wait(1000);
    cy.get('[name="Land"]').type("Portugal");
    cy.wait(1000);
    cy.get('[name="Positie"]').type("Spits");
    cy.wait(1000);
    cy.get(".AddButton").click();
  });
});
