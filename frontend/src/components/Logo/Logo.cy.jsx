import Logo from "./index";

describe("Logo", () => {
  it("renders", () => {
    cy.mount(<Logo />);
    cy.get("svg").should("exist");
  });

  it("renders with props", () => {
    cy.mount(<Logo $width="5rem" />);
  });

  it("call onClick", () => {
    const clickHandler = cy.stub().as("clickHandler");
    cy.mount(<Logo onClick={clickHandler} />);
    cy.get("svg").click();
    cy.wrap(clickHandler).should("be.called");
  });
});
