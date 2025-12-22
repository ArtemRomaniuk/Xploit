import CatalogBtn from "./index";

describe("CatalogBtn", () => {
  it("renders", () => {
    cy.mount(<CatalogBtn>button</CatalogBtn>);
    cy.get("button").should("exist");
  });

  it("renders with props", () => {
    cy.mount(
      <CatalogBtn $width="10rem" $filled>
        button
      </CatalogBtn>,
    );
  });

  it("call onClick", () => {
    const clickHandler = cy.stub().as("clickHandler");
    cy.mount(<CatalogBtn onClick={clickHandler}>button</CatalogBtn>);
    cy.get("button").click();
    cy.wrap(clickHandler).should("be.called");
  });
});
