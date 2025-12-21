import HeaderMinimal from "./index";
import { MemoryRouter } from "react-router";

describe("HeaderMinimal", () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <HeaderMinimal />
      </MemoryRouter>,
    );
  });

  it("renders", () => {
    cy.get("header").should("exist");
  });

  it("click on logo", () => {
    cy.get("svg").click();
  });
});
