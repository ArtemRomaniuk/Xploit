import StyledMobileNav from "./MobileNav.styles";
import Button from "../../components/Button";
import CatalogIcon from "./icons/catalog.svg?react";
import QuestsIcon from "./icons/quests.svg?react";
import CartIcon from "./icons/cart.svg?react";
import WishedIcon from "./icons/wished.svg?react";
import ProfileIcon from "./icons/profile.svg?react";
import { useOrderInfo } from "../../hooks/useOrderInfo";
import { useNavigate } from "react-router";

const MobileNav = (props) => {
  const { itemsCount } = useOrderInfo();
  const navigate = useNavigate();

  return (
    <StyledMobileNav {...props}>
      <Button
        $backColor="transparent"
        $backColorHover="var(--bg-darkest)"
        $borderRadius="0px"
        onClick={() => navigate("catalog")}
      >
        <CatalogIcon />
        Catalog
      </Button>

      <Button
        $backColor="transparent"
        $backColorHover="var(--bg-darkest)"
        $borderRadius="0px"
        onClick={() => navigate("quests")}
      >
        <QuestsIcon />
        Quests
      </Button>

      <Button
        $backColor="transparent"
        $backColorHover="var(--bg-darkest)"
        $borderRadius="0px"
        className="cart"
        onClick={() => navigate("cart")}
      >
        <CartIcon />
        Cart
        <span>{itemsCount}</span>
      </Button>

      <Button
        $backColor="transparent"
        $backColorHover="var(--bg-darkest)"
        $borderRadius="0px"
      >
        <WishedIcon />
        Wished
      </Button>

      <Button
        $backColor="transparent"
        $backColorHover="var(--bg-darkest)"
        $borderRadius="0px"
        onClick={() => navigate("auth")}
      >
        <ProfileIcon />
        Profile
      </Button>
    </StyledMobileNav>
  );
};

export default MobileNav;
