import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import styles from "./MobilePageLayout.module.css";
import ArrowBackIcon from "./arrow-back.svg?react";

const MobilePageLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/cart":
        setPageName("Cart");
        break;

      case "/placing-order":
        setPageName("Place an order");
        break;

      case "/auth":
        setPageName("Login");
        break;

      case "/quests":
        setPageName("Quests");
        break;

      default:
        setPageName("404");
        break;
    }
  }, [location]);

  return (
    <>
      <nav className={styles["page-nav"]}>
        <Button
          onClick={() => navigate(-1)}
          $backColor="var(--ui-main)"
          $backColorHover="var(--ui-darker)"
          $width="3.6rem"
          $height="3.2rem"
        >
          <ArrowBackIcon />
        </Button>
        <p>{pageName}</p>
        <div />
      </nav>

      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default MobilePageLayout;
