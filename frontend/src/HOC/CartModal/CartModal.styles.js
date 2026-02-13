import styled from "styled-components";

const StyledCartModal = styled.div`
  position: absolute;
  top: 9%;
  right: 2.5%;

  width: 70rem;
  height: 51.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: var(--bg-main);
  border: 1px solid var(--ui-darker);
  box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.25);

  .cart-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    height: 70%;
  }

  .modal-cart-header {
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 2.8rem;
    background: var(--bg-darker);
    border-bottom: 1px solid var(--ui-darkest);

    h3 {
      color: var(--white);
      font-size: 3.2rem;
      font-weight: 400;
    }

    button {
      width: 3.2rem;
      height: 3.2rem;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        fill: var(--white);
        width: 100%;
        height: 100%;
        transition: all 0.3s;

        &:hover {
          fill: var(--font-main);
        }
      }
    }
  }

  .cart-items-list {
    height: 100%;
    list-style: none;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 0 2.4rem;

    li {
      border-bottom: 1px solid var(--ui-main);
    }
  }

  .checkout-container {
    align-self: end;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem;

    p {
      color: var(--white);
      font-size: 3.2rem;
      font-weight: 400;
    }
  }

  ${({ $mobile }) =>
    $mobile &&
    `
    position: static;
    width: auto;
    height: auto;
    box-shadow: none;
    background: transparent;
    border: none;
    border-radius: 0;
    overflow: visible;

    figure {
      gap: 6.4rem;
      padding: 0.8rem 0;
    }

    .cart-empty {
      height: 100%;
      font-size: 3.2rem;
    }

    .cart-items-list {
      padding: 0;
      max-width: 70rem;
      width: 100%;
      margin: 0 auto;
      overflow: inherit;
    }

    .checkout-container {
      align-self: center;
      padding: 3.6rem 2.4rem 1.2rem;
    }

    // 528px
    @media (max-width: 33rem)  {
      .cart-items-list {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;

        li {
          border: none;
        }
      }

      figure {
        height: auto;
        gap: 0;
        padding: 1.2rem;
        display: grid;
        row-gap: 1.2rem;
        grid-template-columns: minmax(auto, 40rem);
        justify-content: center;
        background-color: var(--ui-main);
        border-radius: 8px;
        border: 1px solid var(--ui-darkest);

        .img-name {
          max-width: none;
          gap: 4.8rem;
          justify-content: space-between;

          p {
            font-size: 2.4rem;
            text-align: center;
          }
        }

        .count-price {
          max-width: none;

          .price {
            font-size: 2rem;
          }

          .count-btn {
            input {
              width: 5.4rem;
              height: 3.6rem;
            }
          }
        }
      }
    }
  `}

  ${({ $empty, $mobile }) =>
    $empty &&
    $mobile &&
    `
      height: 100%;
    `}
`;

export default StyledCartModal;
