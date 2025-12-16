import styles from "./MainLayout.module.css";
import Header from "../../HOC/Header";
import Sidebar from "../../HOC/Sidebar";
import Footer from "../../HOC/Footer";
import RootModal from "../../HOC/RootModal";
import { Outlet } from "react-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

const MainLayout = () => {
  const fetchMe = useUser((s) => s.fetchMe);

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div className={styles.mainLayout}>
      <Header />
      <Sidebar />
      <Footer />
      <Outlet />
      <RootModal />
    </div>
  );
};

export default MainLayout;
