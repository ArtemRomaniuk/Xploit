import { useCart } from "./cart/useCart";
import { useOrder } from "./useOrder";

export const useOrderInfo = () => {
  const itemsCount = useCart((state) =>
    state.items.reduce((acc, item) => acc + item.count, 0),
  );

  const totalItemsCost = useCart((state) =>
    Number(
      state.items
        .reduce((acc, item) => acc + item.price * item.count, 0)
        .toFixed(2),
    ),
  );

  const deliveryCost = useOrder((state) => state.deliveryCost);
  const xpDiscount = useOrder((state) => state.xpDiscount * 0.1);
  const totalCost = (totalItemsCost + deliveryCost - xpDiscount).toFixed(2);

  return {
    itemsCount: itemsCount,
    totalItemsCost: totalItemsCost,
    deliveryCost: deliveryCost,
    xpDiscount: xpDiscount,
    totalCost: totalCost,
  };
};
