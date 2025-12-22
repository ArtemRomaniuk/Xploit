import { useUser } from "../../../../../hooks/useUser";
import OrderXP from "./index";

describe("OrderXP", () => {
  it("renders", () => {
    cy.mount(<OrderXP />);
    cy.get("div").should("exist");
  });

  it("login state", () => {
    useUser.setState({ isLoggedIn: true, xp: 100 });
    cy.mount(<OrderXP />);
  });

  it("typing xp field", () => {
    useUser.setState({ isLoggedIn: true, xp: 100 });
    cy.mount(<OrderXP />);
    cy.get("input[type=number]").type("90");
    cy.get("input[type=range]").click();
  });
});
