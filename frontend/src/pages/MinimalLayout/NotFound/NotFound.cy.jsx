import NotFound from "./index";

describe("NotFound", () => {
  it("renders", () => {
    cy.mount(<NotFound />);
    cy.contains("404");
  });
});
