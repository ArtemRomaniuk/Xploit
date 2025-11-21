import styled from "styled-components";

const StyledOrderForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 3.6rem;
  background-color: var(--ui-darker);
  border-radius: 8px;

  .order-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h4 {
      color: var(--white);
      font-size: 2.4rem;
      font-weight: 500;
    }

    .input-container {
      display: flex;
      gap: 1.2rem;
      padding: 1.2rem 1.2rem;
      align-items: center;
      border-radius: 6px;
      border: 1px solid var(--ui-bright);

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }

  .empty-cart-message {
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
  }

  .cart-items {
    list-style: none;

    .cart-item:not(:last-child) {
      border-bottom: 1px solid #4b4f5c;
    }
  }
`;

export default StyledOrderForm;
