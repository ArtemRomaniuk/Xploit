/// <reference types="cypress" />

describe("User making order", () => {
  it("Visits the catalog", () => {
    // login
    cy.visit("http://localhost:5173/");
    cy.contains("Login").click();
    cy.get("[data-cy=loginUsernameInput]").type("e2eUser");
    cy.get("[data-cy=loginPassInput]").type("e2e");
    cy.get(".btn-login-register").click();
    cy.contains("e2eUser");

    // adding to cart
    cy.get(".cards figure:nth-child(4) [data-cy=addToCart]").click();
    cy.get(".cards figure:nth-child(8) [data-cy=addToCart]").click();
    cy.scrollTo("top");
    cy.get("[data-cy=cartIconBtn] span").should("have.text", 2);
    cy.get("[data-cy=cartIconBtn]").click();
    cy.contains("checkout").click();

    // placing order
    cy.get("[data-cy=inputName]").type("e2e user");
    cy.get("[data-cy=inputDeliver]").type("London");
    cy.get("[data-cy=inputName]").should("have.value", "e2e user");
    cy.get("[data-cy=inputDeliver]").should("have.value", "London");
    cy.contains("Order").click();

    // checking is cart empty
    cy.get("[data-cy=cartIconBtn] span").should("have.text", 0);
  });
});
