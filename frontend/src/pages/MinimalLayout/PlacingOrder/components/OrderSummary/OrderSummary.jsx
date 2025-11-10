import StyledOrderSummary from "./OrderSummary.styles";
import Button from "../../../../../components/Button";
// import { useOrder } from "../../../../../features/order/useOrder";

const OrderSummary = () => {
  // const itemsTotal = useOrder();

  return (
    <StyledOrderSummary>
      <h3>Total</h3>

      <div className="prices-container">
        <div className="price-items">
          <p>2 items totaling</p>
          <span>39</span>
        </div>
        <div className="price-delivery">
          <p>Delivery</p>
          <span>39</span>
        </div>
        <div className="xp-discount">
          <p>XP discount</p>
          <span>39</span>
        </div>
      </div>

      <div className="total-price">
        <p>In total</p>
        <span>49</span>
      </div>

      <Button $height="4.8rem" className="btn-order">
        Order
      </Button>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
