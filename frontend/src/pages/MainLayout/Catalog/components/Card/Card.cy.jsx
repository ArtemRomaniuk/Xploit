import Card from "./index";

describe("Card", () => {
  beforeEach(() => {
    cy.intercept({ method: "*", url: "**" }, { statusCode: 200, body: {} }).as(
      "request",
    );

    cy.mount(
      <Card
        item={{
          _id: "123",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        }}
      />,
    );

    cy.get("figure").invoke("css", {
      position: "absolute",
      width: "250px",
      height: "300px",
      transform: "translate(-50%, -50%)",
    });
  });

  it("renders with item prop", () => {
    cy.get("figure").should("exist");
  });

  it("handle adding to cart", () => {
    cy.get("[data-cy=addToCart]").click();
  });

  it("handle adding to wish list", () => {
    cy.get("[data-cy=wishIcon]").click();
  });
});
