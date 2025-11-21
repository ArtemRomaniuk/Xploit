import StyledOrderForm from "./OrderForm.styles";
import ItemSummary from "../../../../../components/ItemSummary";
import { useState } from "react";
import IconUser from "./icon-user.svg?react";
import IconLocation from "./location-icon.svg?react";
import { useCart } from "../../../../../hooks/cart/useCart";
import { useNavigate } from "react-router";
import { useUser } from "../../../../../hooks/useUser";
import { useOrder } from "../../../../../hooks/useOrder";

const OrderForm = ({ ...props }) => {
  const [nameForm, setNameForm] = useState("");
  const [locationForm, setLocationForm] = useState("");
  const cartItems = useCart((state) => state.items);
  const navigate = useNavigate();
  const isCartEmpty = cartItems.length === 0;
  const removeXP = useUser((state) => state.removeXP);
  const usedXP = useOrder((state) => state.xpDiscount);
  const setXpDiscount = useOrder((state) => state.setXpDiscount);
  const clearItems = useCart((state) => state.clearItems);

  const handleOrder = (e) => {
    e.preventDefault();
    if (!isCartEmpty) {
      setNameForm("");
      setLocationForm("");
      removeXP(usedXP);
      setXpDiscount(0);
      clearItems();
      console.log("Order was successfully handled!");
      navigate("/catalog");
    }
  };

  return (
    <StyledOrderForm {...props}>
      <form
        id="orderForm"
        className="order-form"
        onSubmit={(e) => handleOrder(e)}
      >
        <h4>Your contact details</h4>

        <div className="input-container">
          <IconUser />
          <input
            type="text"
            value={nameForm}
            placeholder="Type your name"
            onChange={(e) => setNameForm(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <IconLocation />
          <input
            type="text"
            value={locationForm}
            placeholder="Where to deliver?"
            onChange={(e) => setLocationForm(e.target.value)}
            required
          />
        </div>
      </form>

      {isCartEmpty ? (
        <p className="empty-cart-message">Cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((cartItem) => (
            <li key={cartItem.id} className="cart-item">
              <ItemSummary item={cartItem} />
            </li>
          ))}
        </ul>
      )}
    </StyledOrderForm>
  );
};

export default OrderForm;
