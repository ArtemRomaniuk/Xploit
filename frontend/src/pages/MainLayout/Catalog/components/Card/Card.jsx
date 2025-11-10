import StyledCard from "./Card.styles";
import exampleImg from "./logitech-gprox.png";
import IconStarFilled from "./icons/starFilled.svg?react";
import IconStar from "./icons/star.svg?react";
import IconAdd from "./icons/icon-plus.svg?react";
import IconWishFilled from "./icons/icon-wish-filled.svg?react";
import IconWish from "./icons/icon-wish.svg?react";
import { useEffect, useState } from "react";

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

const Card = ({
  item = {
    image: exampleImg,
    alt: "example alt",
    name: "Logitech G PRO X",
    stars: 4,
    price: 19.99,
    isWished: false,
  },
}) => {
  const [isWished, setIsWished] = useState(item.isWished);
  const [aspectRation, setAspectRation] = useState();

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
      <IconWish onClick={() => setIsWished((w) => !w)} />
      <img src={item.image} alt={item.alt} />
      <p>{item.name}</p>
      <div>{starsArr(item.stars)}</div>
      <div>
        <p>{item.price.toFixed(2)}$</p>
        <button>
          <IconAdd />
        </button>
      </div>
    </StyledCard>
  );
};

export default Card;
