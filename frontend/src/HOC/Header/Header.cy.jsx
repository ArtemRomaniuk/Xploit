import Header from "./index";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });

  it("renders", () => {
    cy.get("header").should("exist");
  });

  it("logo emit scroll", () => {
    cy.get("[data-cy=logo]").click();
  });

  it("click on profile", () => {
    cy.get("[data-cy=profile]").click();
  });
});
