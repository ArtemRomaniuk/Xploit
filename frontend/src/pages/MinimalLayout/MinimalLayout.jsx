import styles from "./MinimalLayout.module.css";
import FooterMinimal from "../../HOC/FooterMinimal";
import HeaderMinimal from "../../HOC/HeaderMinimal";
import { Outlet } from "react-router";

const MinimalLayout = () => {
  return (
    <div className={styles["minimal-layout"]}>
      <HeaderMinimal />
      <Outlet />
      <FooterMinimal />
    </div>
  );
};

export default MinimalLayout;
