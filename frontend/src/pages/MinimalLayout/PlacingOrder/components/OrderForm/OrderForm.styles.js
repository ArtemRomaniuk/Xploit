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

    figure {
      gap: 6.4rem;
    }

    .cart-item:not(:last-child) {
      border-bottom: 1px solid #4b4f5c;
    }

    /* 632px inner */
    @container item-summary (max-width: 79em) {
      .count-price {
        max-width: 22rem;
      }
    }
  }

  /* 768px */
  @media (max-width: 48rem) {
    background-color: transparent;
    margin-bottom: 0;

    .cart-items {
      background-color: var(--ui-darker);
      padding: 2.4rem;
      border-radius: 8px;

      figure {
        display: grid;
        height: auto;
        row-gap: 1.2rem;
        grid-template-columns: 1fr;
        padding: 1.2rem;

        .img-name {
          gap: 2.4rem;
          justify-content: space-between;
          text-align: center;
        }

        .count-price {
          justify-content: space-between;
          max-width: none;

          .price {
            font-size: 2rem;
          }
        }
      }
    }

    .order-form {
      background-color: var(--ui-darker);
      order: 1;
      padding: 2.4rem;
      border-radius: 8px;
    }
  }

  /* 400px */
  @media (max-width: 25rem) {
    .cart-items,
    .order-form {
      padding: 1.2rem;
    }
  }
`;

export default StyledOrderForm;
