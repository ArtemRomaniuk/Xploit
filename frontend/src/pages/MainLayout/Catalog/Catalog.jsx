import styles from "./Catalog.module.css";
import Banner from "./components/Banner";
import CardsCatalog from "./components/CardsCatalog";

const Catalog = () => {
  return (
    <main className={styles.catalog}>
      <Banner />
      <CardsCatalog />
    </main>
  );
};

export default Catalog;
