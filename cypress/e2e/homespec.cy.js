describe("Spelers", () => {
  it('clicks the link "Spelers"', () => {
    cy.visit("http://localhost:3000");

    cy.contains("Spelers").click();
  });
});

describe("Teams", () => {
  it('clicks the link "Teams"', () => {
    cy.visit("http://localhost:3000");

    cy.contains("Teams").click();
  });
});

describe("Stadion", () => {
  it('clicks the link "Stadion"', () => {
    cy.visit("http://localhost:3000");

    cy.contains("Stadion").click();
  });
});
