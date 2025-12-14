import StyledCard from "./Card.styles";
import exampleImg from "./logitech-gprox.png";
import IconStarFilled from "./icons/starFilled.svg?react";
import IconStar from "./icons/star.svg?react";
import IconAdd from "./icons/icon-plus.svg?react";
import IconWishFilled from "./icons/icon-wish-filled.svg?react";
import IconWish from "./icons/icon-wish.svg?react";
import { useEffect, useState } from "react";
import { useCart } from "../../../../../hooks/cart/useCart";
import { useUser } from "../../../../../hooks/useUser";

const starsArr = (starsCount) => {
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    stars.push(<IconStarFilled />);
  }
  for (let i = 0; i < 5 - starsCount; i++) {
    stars.push(<IconStar />);
  }

  return stars.map((Star, index) => <span key={index}>{Star}</span>);
};

const Card = ({ item }) => {
  const isWished = useUser((state) => state.wishlist.has(item.id));
  const toggleIsWished = useUser((state) => state.toggleInWishlist);
  const [aspectRation, setAspectRation] = useState();
  const addItemToCart = useCart((state) => state.addItem);
  const cartItems = useCart((state) => state.items);
  const changeCartItemCount = useCart((state) => state.changeItemCount);
  const isLoggedIn = useUser((state) => state.isLoggedIn);

  useEffect(() => {
    const img = new Image();
    img.src = item.image;
    img.onload = () => {
      setAspectRation(img.naturalWidth / img.naturalHeight);
    };
  }, [item.image]);

  return (
    <StyledCard $item={item} $isWished={isWished} $aspectRatio={aspectRation}>
      <IconWishFilled />
      <IconWish onClick={() => isLoggedIn && toggleIsWished(item.id)} />
      <img src={item.image} alt={item.alt} />
      <p>{item.name}</p>
      <div>{starsArr(item.stars)}</div>
      <div
        onClick={() => {
          let isInCart = false;
          cartItems.forEach((cartItem) => {
            if (cartItem.id === item.id) {
              isInCart = true;
              changeCartItemCount(cartItem.id, cartItem.count + 1);
            }
          });
          !isInCart && addItemToCart({ ...item, count: 1 });
        }}
      >
        <p>{item.price.toFixed(2)}$</p>
        <button>
          <IconAdd />
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
