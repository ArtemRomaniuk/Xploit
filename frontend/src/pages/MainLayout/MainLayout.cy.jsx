import { useUser } from "../../hooks/useUser";
import MainLayout from "./index";
import { MemoryRouter } from "react-router";

describe("MainLayout", () => {
  it("renders", () => {
    useUser.setState({ fetchMe: cy.stub() });
    cy.mount(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );
    cy.get("div").should("exist");
  });
});
