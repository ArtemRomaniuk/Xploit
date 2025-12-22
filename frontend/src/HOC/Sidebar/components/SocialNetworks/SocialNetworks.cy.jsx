import SocialNetworks from "./index";

describe("SocialNetworks", () => {
  it("renders", () => {
    cy.mount(<SocialNetworks />);
    cy.get("nav").should("exist");
  });
});
