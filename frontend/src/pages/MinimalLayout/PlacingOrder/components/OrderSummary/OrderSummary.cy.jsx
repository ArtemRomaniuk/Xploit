import OrderSummary from "./index";

describe("OrderSummary", () => {
  it("renders", () => {
    cy.mount(<OrderSummary />);
    cy.contains("Total");
  });
});
