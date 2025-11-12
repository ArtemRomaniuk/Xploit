import StyledOrderSummary from "./OrderSummary.styles";
import Button from "../../../../../components/Button";
import { useOrderInfo } from "../../../../../hooks/useOrderInfo";

const OrderSummary = () => {
  const { itemsCount, totalItemsCost, deliveryCost, xpDiscount, totalCost } =
    useOrderInfo();

  return (
    <StyledOrderSummary>
      <h3>Total</h3>

      <div className="prices-container">
        <div className="price-items">
          <p>
            {itemsCount} item{itemsCount > 1 && "s"} totaling
          </p>
          <span>{totalItemsCost}$</span>
        </div>
        <div className="price-delivery">
          <p>Delivery</p>
          <span>{deliveryCost}$</span>
        </div>
        <div className="xp-discount">
          <p>XP discount</p>
          <span>-{xpDiscount.toFixed(2)}$</span>
        </div>
      </div>

      <div className="total-price">
        <p>In total</p>
        <span>{totalCost}$</span>
      </div>

      <Button
        type="submit"
        form="orderForm"
        $height="4.8rem"
        className="btn-order"
      >
        Order
      </Button>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
