import styles from "./Header.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import IconSquares from "./icons/icon-squares.svg?react";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo
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
        >
          <IconSquares />
          Catalog
        </Button>
        <SearchBar />
      </div>

      <div className={styles.profileCartContainer}>
        <Profile />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
