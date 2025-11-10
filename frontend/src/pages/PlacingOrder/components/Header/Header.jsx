import styles from "./Header.module.css";
import Logo from "../../../../components/Logo";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Logo $width="17rem" $heigth="5.6rem" onClick={() => navigate("/")} />
    </header>
  );
};

export default Header;
