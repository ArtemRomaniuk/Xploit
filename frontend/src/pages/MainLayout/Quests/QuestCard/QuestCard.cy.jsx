import { useQuests } from "../../../../hooks/useQuests";
import QuestCard from "./index";

describe("QuestCard", () => {
  beforeEach(() => {
    cy.intercept({ method: "*", url: "**" }, { statusCode: 200, body: {} }).as(
      "request",
    );
    useQuests.setState({ claimQuest: cy.stub().as("claimQuest") });
    cy.mount(
      <QuestCard
        quest={{
          questRef: {
            _id: "123",
            name: "Use xp!",
            description: "Make 2 purchases using XP",
            reward: 69,
            goal: 2,
            type: "USE_XP",
          },
          progress: 2,
        }}
      />,
    );
  });

  it("renders with 'quest' prop", () => {
    cy.get("figure").should("exist");
  });

  it("claims quest", () => {
    cy.get("button").click();
    cy.get("@claimQuest").should("be.called");
  });
});
