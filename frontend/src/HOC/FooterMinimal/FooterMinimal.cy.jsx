import FooterMinimal from "./index";

describe("FooterMinimal", () => {
  it("renders", () => {
    cy.mount(<FooterMinimal />);
    cy.get("footer").should("exist");
  });
});
