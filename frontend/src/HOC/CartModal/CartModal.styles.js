import styled from "styled-components";

const StyledCartModal = styled.div`
  position: absolute;
  top: 8%;
  right: 3%;

  width: 70rem;
  height: 51rem;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 1.6rem;
  border-radius: 8px;
  background: var(--ui-darker);
  box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.25);

  .cart-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border-top: 1px solid #4b4f5c;
    height: 70%;
  }

  .modal-cart-header {
    display: flex;
    justify-content: space-between;

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
    border-top: 1px solid #4b4f5c;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--ui-main);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--ui-bright);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--ui-bright-hover);
    }

    li {
      border-top: 1px solid #4b4f5c;
    }

    li:last-child {
      border-bottom: 1px solid #4b4f5c;
    }
  }

  .checkout-container {
    align-self: end;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem 2.4rem;
    border: 2px dashed var(--accent-main);
    background: rgba(54, 79, 199, 0.36);

    p {
      color: var(--white);
      font-size: 3.2rem;
      font-weight: 400;
    }
  }
`;

export default StyledCartModal;
