import StyledItemSummary from "./ItemSummary.styles";
import IconMinus from "./substract.svg?react";
import IconPlus from "./add.svg?react";
import { useCart } from "../../hooks/cart/useCart";
import { useEffect, useState } from "react";

const ItemSummary = ({ item, cart }) => {
  const changeItemCount = useCart((state) => state.changeItemCount);
  const [countInput, setCountInput] = useState(item.count);

  useEffect(() => {
    setCountInput(String(item.count));
  }, [item]);

  return (
    <StyledItemSummary $cart={cart}>
      <div className="img-name">
        <div className="img-wrapper">
          <img src={item.image} alt={item.alt} />
        </div>
        <p>{item.name}</p>
      </div>

      <div className="count-price">
        {cart ? (
          <div className="count-btn">
            <button
              className="substract"
              onClick={() =>
                item.count > 0 && changeItemCount(item.id, item.count - 1)
              }
            >
              <IconMinus />
            </button>
            <input
              type="number"
              value={countInput}
              onChange={(e) => setCountInput(e.target.value)}
              onBlur={() => {
                if (
                  countInput === "" ||
                  Number.isNaN(Number(countInput)) ||
                  Number(countInput) < 0 ||
                  Number(countInput) > 100
                )
                  changeItemCount(item.id, 0);
                else changeItemCount(item.id, Number(countInput));
              }}
            />
            <button
              className="add"
              onClick={() =>
                item.count < 100 && changeItemCount(item.id, item.count + 1)
              }
            >
              <IconPlus />
            </button>
          </div>
        ) : (
          <p className="price-count">
            {item.price.toFixed(2)}$ x {item.count}
          </p>
        )}

        <p className="price">{(item.price * item.count).toFixed(2)}$</p>
      </div>
    </StyledItemSummary>
  );
};

export default ItemSummary;
