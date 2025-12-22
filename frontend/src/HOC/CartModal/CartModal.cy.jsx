import CartModal from "./index";
import { MemoryRouter } from "react-router";

describe("CartModal", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <CartModal />
      </MemoryRouter>,
    );
    cy.get("[data-cy=cartModal]")
      .invoke("css", { position: "static" })
      .should("exist");
  });

  it("handle closeBtn onClick", () => {
    cy.mount(
      <MemoryRouter>
        <CartModal />
      </MemoryRouter>,
    );
    cy.get("[data-cy=cartModal]").invoke("css", { position: "static" });
    cy.get("[data-cy=closeBtn]").click();
  });
});
