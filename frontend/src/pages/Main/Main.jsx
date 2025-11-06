import styles from "./Main.module.css";
import Header from "../../HOC/Header";
import Sidebar from "../../HOC/Sidebar";
import Footer from "../../HOC/Footer";

const Main = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Main;
