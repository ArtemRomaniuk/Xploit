import styles from "./PlacingOrder.module.css";
import OrderForm from "./components/OrderForm";
import OrderXP from "./components/OrderXP";
import OrderSummary from "./components/OrderSummary";

const PlacingOrder = () => {
  return (
    <main className={styles["main-container"]}>
      <h2>Place an order</h2>

      <div className={styles["order-container"]}>
        <OrderForm className={styles["order-form"]} />

        <OrderXP className={styles["xp"]} />

        <OrderSummary className={styles["summary"]} />
      </div>
    </main>
  );
};

export default PlacingOrder;
