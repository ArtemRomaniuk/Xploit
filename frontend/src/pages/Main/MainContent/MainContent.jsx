import styles from "./MainContent.module.css";
import Banner from "./components/Banner";
import Catalog from "./components/Catalog";

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <Banner />
      <Catalog />
    </main>
  );
};

export default MainContent;
