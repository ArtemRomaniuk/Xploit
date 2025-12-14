import StyledCartModal from "./CartModal.styles";
import { useCart } from "../../hooks/cart/useCart";
import ItemSummary from "../../components/ItemSummary";
import { useOrderInfo } from "../../hooks/useOrderInfo";
import Button from "../../components/Button";
import IconClose from "./icon-close.svg?react";
import { useModal } from "../../hooks/useModal.jsx";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const CartModal = () => {
  const cartItems = useCart((state) => state.items);
  const { totalItemsCost } = useOrderInfo();
  const close = useModal((state) => state.close);
  const navigate = useNavigate();
  const isOpen = useModal((state) => state.isOpen);
  const clearCountlessItems = useCart((state) => state.clearCountlessItems);
  const isEmpty = cartItems.length === 0;

  useEffect(() => {
    !isOpen && clearCountlessItems();
  }, [isOpen]);

  return (
    <StyledCartModal onPointerDown={(e) => e.stopPropagation()}>
      <div className="modal-cart-header">
        <h3>Cart</h3>
        <button onClick={() => close()}>
          <IconClose />
        </button>
      </div>

      {isEmpty ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                <ItemSummary item={item} cart />
              </li>
            ))}
          </ul>
          <div className="checkout-container">
            <p>{totalItemsCost}$</p>
            <Button
              onClick={() => {
                navigate("/placing-order");
                close();
              }}
              $width="16rem"
              $height="5.2rem"
            >
              checkout
            </Button>
          </div>
        </>
      )}
    </StyledCartModal>
  );
};

CartModal.rootModalStyles = `
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;

export default CartModal;
