import PlacingOrder from "./index";
import { MemoryRouter } from "react-router";

describe("PlacingOrder", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <PlacingOrder />
      </MemoryRouter>,
    );
    cy.get("main").should("exist");
  });
});
