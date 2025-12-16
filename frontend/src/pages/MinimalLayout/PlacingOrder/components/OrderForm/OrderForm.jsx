import StyledOrderForm from "./OrderForm.styles";
import ItemSummary from "../../../../../components/ItemSummary";
import { useState } from "react";
import IconUser from "./icon-user.svg?react";
import IconLocation from "./location-icon.svg?react";
import { useCart } from "../../../../../hooks/cart/useCart";
import { useNavigate } from "react-router";
import { useUser } from "../../../../../hooks/useUser";
import { useOrder } from "../../../../../hooks/useOrder";
import { useQuests } from "../../../../../hooks/useQuests";
import { useEffect } from "react";

const OrderForm = ({ ...props }) => {
  const [nameForm, setNameForm] = useState("");
  const [locationForm, setLocationForm] = useState("");

  const cartItems = useCart((state) => state.items);
  const clearItems = useCart((state) => state.clearItems);
  const isCartEmpty = cartItems.length === 0;

  const usedXP = useOrder((state) => state.xpDiscount);
  const setXpDiscount = useOrder((state) => state.setXpDiscount);

  const removeXP = useUser((state) => state.removeXP);
  const triggerQuestsEvent = useQuests((state) => state.triggerEvent);
  const navigate = useNavigate();

  const fetchCart = useCart((s) => s.fetchCart);
  const placeOrder = useOrder((s) => s.placeOrder);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!isCartEmpty) {
      try {
        await placeOrder(usedXP);
        usedXP > 0 && triggerQuestsEvent("USE_XP", 1);

        setNameForm("");
        setLocationForm("");
        setXpDiscount(0);

        navigate("/catalog");
      } catch (e) {
        console.error(e.message);
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
            <li key={cartItem._id} className="cart-item">
              <ItemSummary item={cartItem} />
            </li>
          ))}
        </ul>
      )}
    </StyledOrderForm>
  );
};

export default OrderForm;
