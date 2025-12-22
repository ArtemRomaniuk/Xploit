import MinimalLayout from "./index";
import { BrowserRouter } from "react-router";

describe("MinimalLayout", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <MinimalLayout />
      </BrowserRouter>,
    );
    cy.get("div").should("exist");
  });
});
