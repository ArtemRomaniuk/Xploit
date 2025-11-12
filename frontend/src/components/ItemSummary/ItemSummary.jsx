import { useState } from "react";
import StyledItemSummary from "./ItemSummary.styles";
import imgLogitechGProX from "./logitech-gprox.png";
import IconMinus from "./substract.svg?react";
import IconPlus from "./add.svg?react";

const ItemSummary = ({
  item = {
    id: 0,
    image: imgLogitechGProX,
    alt: "Logitech G Pro X headphones photo",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
    isWished: false,
    count: 1,
  },
  cart,
}) => {
  const [count, setCount] = useState(item.count);

  return (
    <StyledItemSummary>
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
              onClick={() => count > 0 && setCount((c) => c - 1)}
            >
              <IconMinus />
            </button>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <button className="add" onClick={() => setCount((c) => c + 1)}>
              <IconPlus />
            </button>
          </div>
        ) : (
          <p className="price-count">
            {item.price.toFixed(2)}$ x {count}
          </p>
        )}

        <p className="price">{(item.price * count).toFixed(2)}$</p>
      </div>
    </StyledItemSummary>
  );
};

export default ItemSummary;
