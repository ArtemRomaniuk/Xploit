import { useQuests } from "../../../hooks/useQuests";
import { useUser } from "../../../hooks/useUser";
import Quests from "./index";

describe("Quests", () => {
  it("renders", () => {
    cy.mount(<Quests />);
    cy.get("main").should("exist");
  });

  it("login state", () => {
    useUser.setState({ isLoggedIn: true });
    cy.mount(<Quests />);
    cy.contains("No more quests");
  });

  it("with quests", () => {
    useUser.setState({ isLoggedIn: true });
    useQuests.setState({
      quests: [
        {
          questRef: {
            _id: "123",
            name: "Use xp!",
            description: "Make 2 purchases using XP",
            reward: 69,
            goal: 2,
            type: "USE_XP",
          },
          progress: 2,
        },
        {
          questRef: {
            _id: "124",
            name: "Use xp!",
            description: "Make 2 purchases using XP",
            reward: 69,
            goal: 2,
            type: "USE_XP",
          },
          progress: 2,
        },
      ],
    });
    cy.mount(<Quests />);
    cy.contains("Use xp!");
  });
});
