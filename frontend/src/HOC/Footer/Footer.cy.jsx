import Footer from "./index";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    cy.get("footer").should("exist");
  });
});
