import Button from "./index";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>click</Button>);
    cy.get("button").should("exist");
  });

  it("renders with 'Button' text and props", () => {
    cy.mount(
      <Button $height="4.8rem" $width="12rem">
        Button
      </Button>,
    );
    cy.get("button").should("have.text", "Button");
  });

  it("calls onClick", () => {
    const clickHandler = cy.stub();
    cy.mount(<Button onClick={clickHandler}>click</Button>);
    cy.get("button").click();
    cy.wrap(clickHandler).should("be.called");
  });
});
