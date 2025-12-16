import styles from "./MinimalLayout.module.css";
import FooterMinimal from "../../HOC/FooterMinimal";
import HeaderMinimal from "../../HOC/HeaderMinimal";
import { Outlet } from "react-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

const MinimalLayout = () => {
  const fetchMe = useUser((s) => s.fetchMe);

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div className={styles["minimal-layout"]}>
      <HeaderMinimal />
      <Outlet />
      <FooterMinimal />
    </div>
  );
};

export default MinimalLayout;
