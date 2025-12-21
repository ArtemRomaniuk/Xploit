import styles from "./Header.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import IconSquares from "./icons/icon-squares.svg?react";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { useNavigate } from "react-router";
import { useModal } from "../../hooks/useModal.jsx";
import CartModal from "../CartModal";
import AuthModal from "../AuthModal";
import { useUser } from "../../hooks/useUser.js";
import { useEffect } from "react";
import { useCart } from "../../hooks/cart/useCart.js";

const Header = () => {
  const navigate = useNavigate();
  const openModal = useModal((state) => state.open);
  const isLoggedIn = useUser((state) => state.isLoggedIn);
  const fetchCart = useCart((s) => s.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <header className={styles.header}>
      <Logo
        data-cy="logo"
        className={styles.logo}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />

      <div className={styles.btnSearchContainer}>
        <Button
          className={styles.btnCatalog}
          $width="16rem"
          $height="4.4rem"
          $gap="0.4rem"
          onClick={() => navigate("catalog")}
        >
          <IconSquares />
          Catalog
        </Button>
        <SearchBar />
      </div>

      <div className={styles.profileCartContainer}>
        <Profile
          data-cy="profile"
          onClick={() => !isLoggedIn && openModal(<AuthModal />)}
        />
        <Cart data-cy="cartIconBtn" onClick={() => openModal(<CartModal />)} />
      </div>
    </header>
  );
};

export default Header;
