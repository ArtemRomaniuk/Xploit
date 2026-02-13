import styled from "styled-components";

const StyledAuthModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48rem;
  padding: 4.8rem;
  display: flex;
  flex-direction: column;

  border-radius: 24px;
  border: 1px solid var(--ui-darker);
  background-color: var(--bg-main);
  box-shadow: 0 4px 22px 4px rgba(0, 0, 0, 0.55);

  .auth-heading-container {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      color: var(--white);
      font-size: 4.8rem;
      font-weight: 500;
      margin-bottom: ${({ $isRegistration }) =>
        $isRegistration ? "0" : "1.6rem"};
    }

    p {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  #login-form,
  #register-form {
    display: flex;
    flex-direction: column;
    gap: ${({ $isRegistration }) => ($isRegistration ? "0.8rem" : "2rem")};

    .input-field {
      p {
        font-size: 2rem;
        margin-bottom: ${({ $isRegistration }) =>
          $isRegistration ? "0.4rem" : "0.8rem"};
        color: var(--font-darker);
      }

      input {
        width: 100%;
        height: 4.8rem;
        font-size: 2.4rem;
        padding: 0 0.8rem;

        outline: none;
        border-radius: 6px;
        border: 1px solid var(--ui-main);
        background: none;
      }
    }

    .passwords-missmatch {
      color: var(--red);
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  .forgot-password {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.1s;
    align-self: flex-end;

    &:hover {
      color: var(--font-main-hover);
    }
  }

  .btn-login-register {
    margin-top: ${({ $isRegistration }) =>
      $isRegistration ? "3.2rem" : "2.4rem"};
  }

  .change-auth {
    margin-top: 2.4rem;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;

    span {
      cursor: pointer;
      color: var(--accent-main);
      font-weight: 400;
      text-decoration: underline;
      text-underline-position: from-font;
      text-decoration-thickness: from-font;
      transition: all 0.1s;

      &:hover {
        color: var(--accent-hover);
      }
    }
  }

  ${({ $mobile }) =>
    $mobile &&
    `
    position: static;
    max-width: 40rem;
    width: auto;
    margin: 0 auto;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: transparent;
    border-radius: 0;

    #login-form,
    #register-form {
      margin-top: 3.2rem;
      gap: 1.6rem;
    }
  `}
`;

export default StyledAuthModal;
