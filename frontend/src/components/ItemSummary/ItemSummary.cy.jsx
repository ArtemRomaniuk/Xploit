import ItemSummary from "./index";

const testItem = {
  image: "/uploads/catalogItemsImgs/logitech-gprox.png",
  alt: "logitech g pro x gaming headphones photo",
  name: "Logitech G PRO X",
  stars: 4,
  price: 19.99,
  count: 1,
  _id: "123",
};

describe("ItemSummary", () => {
  beforeEach(() => {
    cy.intercept({ method: "*", url: "**" }, { statusCode: 200, body: {} }).as(
      "request",
    );
  });

  it("renders", () => {
    cy.mount(<ItemSummary item={testItem} />);
  });

  it("renders with 'cart' prop", () => {
    cy.mount(<ItemSummary item={testItem} cart />);
    cy.contains("1");
  });

  it("changing count", () => {
    cy.mount(<ItemSummary item={testItem} cart />);
    cy.get("button.add").click();
    cy.wait("@request");
    cy.mount(<ItemSummary item={{ ...testItem, count: 2 }} cart />);
    cy.get("button.add").click();
    cy.wait("@request");
    cy.mount(<ItemSummary item={{ ...testItem, count: 3 }} cart />);
    cy.get("button.substract").click();
    cy.wait("@request");
    cy.mount(<ItemSummary item={{ ...testItem, count: 2 }} cart />);
    cy.get("input").should("have.value", 2);
  });

  it("input typing", () => {
    cy.mount(<ItemSummary item={testItem} cart />);
    cy.get("input").type(3);
    cy.get("input").blur();
    cy.wait("@request");
    cy.mount(<ItemSummary item={{ ...testItem, count: 3 }} cart />);
    cy.get("input").should("have.value", 3);
  });
});
