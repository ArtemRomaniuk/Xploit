import CardsCatalog from "./index";
import { useCatalog } from "../../../../../hooks/catalog/useCatalog";
import { version } from "react-dom/server";

describe("CardsCatalog", () => {
  beforeEach(() => {
    cy.intercept({ method: "*", url: "**" }, { statusCode: 200, body: {} }).as(
      "request",
    );
    useCatalog.setState({
      items: [
        {
          _id: "123",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
        {
          _id: "124",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
        {
          _id: "125",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
        {
          _id: "126",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
        {
          _id: "127",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
        {
          _id: "128",
          image: "/uploads/catalogItemsImgs/logitech-gprox.png",
          alt: "Logitech G Pro X headphones photo",
          name: "Logitech G PRO X",
          stars: 4,
          price: 19.99,
        },
      ],
      currentPage: 0,
      currentLimit: 6,
      currentSort: "top",
      fetchPage: cy.stub(),
      fetchItemsCount: cy.stub(),
      nextPage: cy.stub(),
      prevPage: cy.stub(),
      setSort: cy.stub(),
    });
  });

  it("renders with items", () => {
    cy.mount(<CardsCatalog />);
    cy.get("div").should("exist");
  });

  it("changing sort param", () => {
    cy.mount(<CardsCatalog />);
    cy.get("[data-cy=sortTop]").click();
    useCatalog.setState({ currentSort: "top" });
    cy.get("[data-cy=sortCheap]").click();
    useCatalog.setState({ currentSort: "cheap" });
    cy.get("[data-cy=sortExpensive]").click();
    useCatalog.setState({ currentSort: "expensive" });
  });
});
