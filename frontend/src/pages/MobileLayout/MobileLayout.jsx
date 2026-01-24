import styles from "./MobileLayout.module.css";
import { Outlet } from "react-router";
import MobileNav from "../../HOC/MobileNav/MobileNav";

const MobileLayout = () => {
  return (
    <div className={styles["mobile-layout"]}>
      <MobileNav />
      <Outlet />
    </div>
  );
};

export default MobileLayout;
