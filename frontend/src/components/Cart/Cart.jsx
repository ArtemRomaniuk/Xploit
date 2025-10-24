import { useState } from "react";
import styles from "./Cart.module.css";
import IconCart from "./icon-cart.svg?react";

export default function Cart() {
  const [itemsCount, setItemsCount] = useState(1);

  return (
    <div className={styles.cart}>
      <IconCart className={styles.IconCart} />
      {itemsCount > 0 && (
        <span className={styles.itemsCount}>{itemsCount}</span>
      )}
    </div>
  );
}
