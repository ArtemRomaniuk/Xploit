import Catalog from "./index";

describe("Catalog", () => {
  it("renders", () => {
    cy.mount(<Catalog />);
    cy.get("main").should("exist");
  });
});
