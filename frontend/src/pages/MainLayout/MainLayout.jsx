import styles from "./MainLayout.module.css";
import Header from "../../HOC/Header";
import Sidebar from "../../HOC/Sidebar";
import Footer from "../../HOC/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Sidebar />
      <Footer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
