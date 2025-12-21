import Cart from "./index";

describe("Cart", () => {
  it("renders", () => {
    cy.mount(<Cart />);
    cy.get("svg").should("exist");
  });
});
