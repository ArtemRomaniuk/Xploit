import styled from "styled-components";

const StyledCartModal = styled.div`
  position: absolute;
  top: 36%;
  right: -16%;

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
`;

export default StyledCartModal;
