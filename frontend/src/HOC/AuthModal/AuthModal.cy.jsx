import AuthModal from "./index";

describe("AuthModal", () => {
  beforeEach(() => {
    cy.intercept({ method: "*", url: "**" }, { statusCode: 200, body: {} }).as(
      "request",
    );
  });

  it("renders", () => {
    cy.mount(<AuthModal />);
    cy.get("[data-cy=authModal]")
      .invoke("css", { position: "static" })
      .should("exist");
  });

  it("filling login form", () => {
    cy.mount(<AuthModal />);
    cy.get("[data-cy=authModal]").invoke("css", { position: "static" });
    cy.get("[data-cy=loginUsernameInput]")
      .type("user")
      .should("have.value", "user");
    cy.get("[data-cy=loginPassInput]").type("123").should("have.value", "123");
    cy.get(".btn-login-register").click();
    cy.wait("@request");
    cy.get("[data-cy=loginUsernameInput]").should("have.value", "");
    cy.get("[data-cy=loginPassInput]").should("have.value", "");
  });

  it("filling register form", () => {
    cy.mount(<AuthModal />);
    cy.get("[data-cy=authModal]").invoke("css", { position: "static" });

    cy.get(".change-auth").click();
    cy.get("[data-cy=registerEmailInput]")
      .type("user@gmail.com")
      .should("have.value", "user@gmail.com");
    cy.get("[data-cy=registerUsernameInput]")
      .type("user")
      .should("have.value", "user");
    cy.get("[data-cy=registerPassInput]")
      .type("123")
      .should("have.value", "123");
    cy.get("[data-cy=registerPassAgainInput]")
      .type("123")
      .should("have.value", "123");

    cy.get(".btn-login-register").click();
    cy.wait("@request");
    cy.get("[data-cy=registerEmailInput]").should("have.value", "");
    cy.get("[data-cy=registerUsernameInput]").should("have.value", "");
    cy.get("[data-cy=registerPassInput]").should("have.value", "");
    cy.get("[data-cy=registerPassAgainInput]").should("have.value", "");
  });
});
