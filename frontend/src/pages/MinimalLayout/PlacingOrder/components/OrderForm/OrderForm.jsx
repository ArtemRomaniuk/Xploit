import StyledOrderForm from "./OrderForm.styles";
import ItemSummary from "../../../../../components/ItemSummary";
import { useState } from "react";
import IconUser from "./icon-user.svg?react";
import IconLocation from "./location-icon.svg?react";
import { useCart } from "../../../../../hooks/cart/useCart";
import { useNavigate } from "react-router";

const OrderForm = ({ ...props }) => {
  const [nameForm, setNameForm] = useState("");
  const [locationForm, setLocationForm] = useState("");
  const cartItems = useCart((state) => state.items);
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();
    setNameForm("");
    setLocationForm("");
    console.log("Order was successfully handled!");
    navigate("/catalog");
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

      <ul className="cart-items">
        {cartItems.map((cartItem, index) => (
          <li key={index} className="cart-item">
            <ItemSummary item={cartItem} />
          </li>
        ))}
      </ul>
    </StyledOrderForm>
  );
};

export default OrderForm;
