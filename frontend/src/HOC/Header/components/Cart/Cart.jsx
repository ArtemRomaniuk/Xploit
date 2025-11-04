import styled from "styled-components";
import { useCart } from "../../../../features/cart/useCart";
import IconCart from "./icon-cart.svg?react";

const StyledCart = styled.div`
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  width: 4rem;
  height: 4rem;

  svg {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-size: 1.4rem;
    color: var(--white);
    min-width: 2rem;
    padding: 0.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--accent-main);
    border-radius: 10px;
    line-height: 1;

    position: absolute;
    transform: translate(+50%, -50%);
    top: 15%;
    right: 15%;
  }
`;

const Cart = () => {
  const itemsCount = useCart((state) => state.items.length);

  return (
    <StyledCart>
      <IconCart />
      <span>{itemsCount}</span>
    </StyledCart>
  );
};

export default Cart;
