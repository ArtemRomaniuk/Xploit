import styles from "./PlacingOrder.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const PlacingOrder = () => {
  return (
    <div className={styles.placingOrderLayout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default PlacingOrder;
