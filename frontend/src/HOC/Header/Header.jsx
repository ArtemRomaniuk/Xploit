import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar.jsx/SearchBar";
import styles from "./Header.module.css";
import IconSquares from "./icon-squares.svg?react";
import Profile from "../../components/Profile/Profile";
import Cart from "../../components/Cart/Cart";

export default function Header() {
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
      <div className={styles.catalogSearchContainer}>
        <Button>
          <div className={styles.catalogBtn}>
            <IconSquares />
            Catalog
          </div>
        </Button>
        <SearchBar />
      </div>
      <div className={styles.profileCartContainer}>
        <Profile />
        <Cart />
      </div>
    </header>
  );
}
