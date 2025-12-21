import Profile from "./index";
import { useUser } from "../../../../hooks/useUser";

describe("Profile", () => {
  it("renders", () => {
    cy.mount(<Profile />);
    cy.get("div").should("exist");
  });

  it("login state", () => {
    useUser.setState({ isLoggedIn: true, username: "Leonardo" });
    cy.mount(<Profile />);
    cy.contains("Leonardo");
  });
});
