import Banner from "./index";

describe("Banner", () => {
  it("renders", () => {
    cy.mount(<Banner />);
    cy.get("div").should("exist");
  });
});
