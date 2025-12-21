import SearchBar from "./index";

describe("SearchBar", () => {
  it("renders", () => {
    cy.mount(<SearchBar />);
    cy.get("div").should("exist");
  });

  it("typing and sending query", () => {
    cy.mount(<SearchBar />);
    cy.get("input").type("headphones");
    cy.get("input").should("have.value", "headphones");
    cy.get("svg").click();
    cy.get("input").should("have.value", "");
  });
});
