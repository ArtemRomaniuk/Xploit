import StyledOrderSummary from "./OrderSummary.styles";
import Button from "../../../../../components/Button";
import { useOrderInfo } from "../../../../../hooks/useOrderInfo";
import { useCart } from "../../../../../hooks/cart/useCart";

const OrderSummary = (props) => {
  const { itemsCount, totalItemsCost, deliveryCost, xpDiscount, totalCost } =
    useOrderInfo();
  const isCartEmpty = useCart((state) => state.items.length === 0);

  return (
    <StyledOrderSummary {...props}>
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
        form={!isCartEmpty ? "orderForm" : "none"}
        $height="4.8rem"
        className="btn-order"
        $backColor={isCartEmpty && `var(--ui-main)`}
        $backColorHover={isCartEmpty && `var(--ui-main)`}
        $cursor={isCartEmpty && "default"}
      >
        Order
      </Button>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
