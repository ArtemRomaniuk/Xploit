import NavList from "./index";
import NavListItem from "./NavListItem";
import { MemoryRouter } from "react-router";

describe("NavList", () => {
  it("renders", () => {
    cy.mount(
      <MemoryRouter>
        <NavList />
      </MemoryRouter>,
    );
    cy.get("nav").should("exist");
  });

  it("has correct items length", () => {
    cy.mount(
      <MemoryRouter>
        <NavList
          navName="navigation"
          navItems={[new NavListItem(), new NavListItem(), new NavListItem()]}
          collapsing
        />
      </MemoryRouter>,
    );
    cy.get("nav").find("li").should("have.length", 3);
  });

  it("renders with props and collapsing", () => {
    cy.mount(
      <MemoryRouter>
        <NavList
          navName="navigation"
          navItems={[new NavListItem(), new NavListItem(), new NavListItem()]}
          collapsing
        />
      </MemoryRouter>,
    );
    cy.get("nav").should("exist");
    cy.get("button").click();
  });
});
