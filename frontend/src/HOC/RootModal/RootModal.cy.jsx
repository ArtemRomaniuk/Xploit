import RootModal from "./index";

describe("RootModal", () => {
  it("renders", () => {
    cy.mount(<RootModal />);
    cy.get("div").should("exist");
  });
});
