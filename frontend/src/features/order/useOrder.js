// import { create } from "zustand";
// import { useCart } from "../cart/useCart";

// const itemsCount = useCart((state) => {
//   totalCount = 0;
//   state.items.forEach((item) => {
//     totalCount += item.count;
//   });
//   return totalCount;
// });

// const totalItemsCost = useCart((state) => {
//   totalCost = 0;
//   state.items.forEach((item) => {
//     totalCost += item.cost * item.count;
//   });
//   return totalCost;
// });

// export const useOrder = create((set) => ({
//   itemsCount: itemsCount,
//   totalItemsCost: totalItemsCost,
//   deliveryCost: 12,
//   setDeliveryCost: (newCost) => set({ deliveryCost: newCost }),
// }));
