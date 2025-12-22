import { useCart } from "../../../../../hooks/cart/useCart";
import { useOrder } from "../../../../../hooks/useOrder";
import { useQuests } from "../../../../../hooks/useQuests";
import OrderForm from "./index";
import { MemoryRouter } from "react-router";

describe("OrderForm", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <OrderForm />
      </MemoryRouter>,
    );
    cy.get("div").should("exist");
  });

  it("renders with item", () => {
    useCart.setState({
      items: [
        {
          image: "/uploads/catalogItemsImgs/logitech-g-102.png",
          alt: "Logitech G102 mouse photo",
          name: "Logitech G102",
          stars: 5,
          price: 33.99,
          count: 1,
          _id: "123",
        },
      ],
    });
    cy.mount(
      <MemoryRouter>
        <OrderForm />
      </MemoryRouter>,
    );
    cy.contains("G102");
  });

  it("typing, submiting form and emiting quest event", () => {
    useOrder.setState({ xpDiscount: 10 });
    useQuests.setState({
      triggerEvent: cy.stub().as("trigerQuestEvent"),
    });
    useCart.setState({
      items: [
        {
          image: "/uploads/catalogItemsImgs/logitech-g-102.png",
          alt: "Logitech G102 mouse photo",
          name: "Logitech G102",
          stars: 5,
          price: 33.99,
          count: 1,
          _id: "123",
        },
      ],
    });
    cy.mount(
      <MemoryRouter>
        <OrderForm />
      </MemoryRouter>,
    );
    cy.get("[data-cy=inputName]").type("Artem");
    cy.get("[data-cy=inputDeliver]").type("Uzhhorod");
    cy.get("#orderForm").submit();
    cy.get("[data-cy=inputName]").should("have.value", "");
    cy.get("[data-cy=inputDeliver]").should("have.value", "");
    cy.get("@trigerQuestEvent").should("be.called");
  });
});
