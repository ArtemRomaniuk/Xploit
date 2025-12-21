import Sidebar from "./index";
import { MemoryRouter } from "react-router";

describe("Sidebar", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    cy.get("aside").should("exist");
  });
});
